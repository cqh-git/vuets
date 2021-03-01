<template>
    <div class="root">
        <div style="width:100%;height: 100%">
            <div id="map"></div>
        </div>

    </div>
</template>
<script>
    import * as echarts from 'echarts';
    import {onMounted} from 'vue';
    import styleJson from '../../../public/custom_map_config.json'
    import SHLngLat from '../../../public/lnglat.json'

    require('echarts/extension/bmap/bmap')
    export default {
        name: 'China',
        mounted() {
            this.initCharts()
        },
        methods: {
            initCharts() {
                const myChart = echarts.init(document.getElementById('map'));
                const scatter = [{name: '嘉北郊野公园', value: [121.20591, 31.365026]}, {
                    name: '松江南站',
                    value: [121.23753, 30.991561]
                }, {
                    name: '宝山钢铁厂',
                    value: [121.43383, 31.43867]
                }, {
                    name: '杨高南路立交桥',
                    value: [121.48918, 31.13347]
                }];
                const effectScatter = [{
                    name: '虹桥机场',
                    value: [121.34113, 31.19590]
                }, {
                    name: '大世界',
                    value: [121.47439, 31.23026]
                }, {
                    name: '上海迪士尼',
                    value: [121.670873, 31.14659]
                }, {
                    name: '光明瑞华果园',
                    value: [121.335266, 31.821963]
                }];
                myChart.setOption({
                    tooltip: {
                        show: true
                    },
                    bmap: {
                        roam: true,
                        zoom: 10,
                        center: [121.49491, 31.24169]
                    },
                    animation: true,
                    series: [{
                        //出发地信息
                        name: 1,
                        type: 'lines',
                        zlevel: 2,
                        coordinateSystem: 'bmap',
                        symbol: 'circle',
                        effect: {
                            color: '#00FF90',
                            show: true,
                            period: 2,
                            trailLength: 0.01,
                            symbol: 'circle',
                            symbolSize: 4,
                            loop: true
                        },
                        lineStyle: {
                            color: "#a6c84c",
                            type: 'dashed',
                            width: 1,
                            opacity: 0.1,
                            curveness: 0.1,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                        data: [{
                            "fromName": "东滩湿地公园",
                            "toName": "上海中桥职业技术学院",
                            "coords": [[121.959337, 31.524654], [121.309682, 30.806304]]
                        },
                            {
                                "fromName": "上海赛车场",
                                "toName": "上海立达学院",
                                "coords": [[121.232069, 31.343239], [121.327505, 30.942683]]
                            }
                        ]
                    }, {
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: scatter,
                        pointSize: 5,
                        blurSize: 6,
                        symbol: 'circle',

                    }, {
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: effectScatter,
                        pointSize: 5,
                        blurSize: 6
                    }]
                })
                const mapModel = myChart.getModel().getComponent('bmap').getBMap();
                mapModel.setMapStyleV2({styleJson: styleJson});
                // mapModel.centerAndZoom(new BMap.Point(122.49491, 31.24169), 10);
                // mapModel.centerAndZoom('上海',10);
                const hole = new BMap.Polygon(SHLngLat, {
                    fillColor: 'blue',
                    fillOpacity: 0.2
                });
                setTimeout(() => mapModel.addOverlay(hole), 100)
                mapModel.enableScrollWheelZoom(true)
                mapModel.setMinZoom(4)
                mapModel.setMaxZoom(20)
                const bd = new BMap.Boundary();
                bd.get('河南', function (rs) {
                    rs.boundaries.forEach(item => {
                        const hole = new BMap.Polygon(item, {
                            fillColor: 'blue',
                            fillOpacity: 0.2
                        })
                        mapModel.addOverlay(hole);
                        // mapModel.setViewport(hole.getPath())不生效
                    })
                });
            },

        },
    }
</script>
<style scoped lang="scss">
    .root {
        width: 100%;
        height: 100%;

        #map {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

</style>

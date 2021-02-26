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
                const scatter = [{name: '金茂大厦', value: [121.50109, 31.23691]}, {
                    name: '火车北站',
                    value: [121.47039, 31.25210]
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
                        data: [{
                            "fromName": "黑龙江",
                            "toName": "珠海",
                            "coords": [[126.661669, 45.742347], [113.576726, 22.270715]]
                        },
                            {
                                "fromName": "黑龙江",
                                "toName": "舒兰",
                                "coords": [[126.661669, 45.742347], [126.965607, 44.406106]]
                            },
                            {
                                "fromName": "黑龙江",
                                "toName": "胶州",
                                "coords": [[126.661669, 45.742347], [120.033382, 36.26468]]
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
                // const bd = new BMap.Boundary();
                // bd.get('河南', function (rs) {
                //     rs.boundaries.forEach(item => {
                //         const hole = new BMap.Polygon(item, {
                //             fillColor: 'blue',
                //             fillOpacity: 0.2
                //         })
                //         mapModel.addOverlay(hole);
                //     })
                // });
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

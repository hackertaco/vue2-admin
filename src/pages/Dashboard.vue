<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
            <chart-card :chart-data="dailySalesChart.data" :chart-options="dailySalesChart.options" :chart-type="'Line'" data-background-color="blue">
                <template slot="content">
                    <h4 class="title">Daily Sales</h4>
                    <p class="category">
                        <span class="text-success">
                            <i class="fas fa-long-arrow-alt-up"></i> 55%
                        </span>
                        increase in today sales
                    </p>
                </template>
                <template slot="footer">
                    <div class="stats">
                        <md-icon>access_time</md-icon>
                        updated 4 minutes ago
                    </div>
                </template>
            </chart-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    ChartCard
} from '@/components'
export default {
    components: {
        ChartCard
    },
    data() {
        return {
            dailySalesChart: {
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    series: [
                        [12, 17, 7, 17, 23, 18, 38]
                    ]
                },
                options: {
                    lineSmooth: this.$Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 50,
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            },
        }

    }
}
</script>

<style>

</style>

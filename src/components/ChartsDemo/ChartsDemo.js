import React from 'react';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/BarChart';
import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/ColumnChart';
import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/ComposedChart';
import { DonutChart } from '@ui5/webcomponents-react-charts/lib/DonutChart';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';
import { PieChart } from '@ui5/webcomponents-react-charts/lib/PieChart';
import { RadarChart } from '@ui5/webcomponents-react-charts/lib/RadarChart';
import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';

function ChartsDemo(props) {
    return (
        <React.Fragment>
            <div>
                <h1>Charts</h1>
            </div>
            <div>
                <div>
                    <BarChart
                        dataset={[
                            {
                            name: 'January',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'February',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'March',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'April',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            },
                            {
                            name: 'May',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'June',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'July',
                            sessions: 470,
                            users: 20,
                            volume: 450
                            },
                            {
                            name: 'August',
                            sessions: 180,
                            users: 220,
                            volume: 104
                            },
                            {
                            name: 'September',
                            sessions: 360,
                            users: 200,
                            volume: 879
                            },
                            {
                            name: 'October',
                            sessions: 500,
                            users: 250,
                            volume: 200
                            },
                            {
                            name: 'November',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'December',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            }
                        ]}
                        dimensions={[
                            {
                            accessor: 'name'
                            }
                        ]}
                        measures={[
                            {
                            accessor: 'users',
                            formatter: function noRefCheck(){},
                            label: 'Users',
                            opacity: 0.6
                            },
                            {
                            accessor: 'sessions',
                            formatter: function noRefCheck(){},
                            hideDataLabel: true,
                            label: 'Active Sessions'
                            },
                            {
                            accessor: 'volume',
                            label: 'Vol.'
                            }
                        ]}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            height: '60vh'
                        }}
                    />
                </div>
                <div>
                    <ColumnChart
                    chartConfig={{
                        gridHorizontal: true,
                        gridStroke: 'var(--sapList_BorderColor)',
                        gridVertical: false,
                        legendHorizontalAlign: 'left',
                        legendPosition: 'bottom',
                        resizeDebounce: 250,
                        xAxisVisible: true,
                        yAxisVisible: false,
                        zoomingTool: false
                    }}
                    dataset={[
                        {
                        name: 'January',
                        sessions: 300,
                        users: 100,
                        volume: 756
                        },
                        {
                        name: 'February',
                        sessions: 330,
                        users: 230,
                        volume: 880
                        },
                        {
                        name: 'March',
                        sessions: 404,
                        users: 240,
                        volume: 700
                        },
                        {
                        name: 'April',
                        sessions: 80,
                        users: 280,
                        volume: 604
                        },
                        {
                        name: 'May',
                        sessions: 300,
                        users: 100,
                        volume: 756
                        },
                        {
                        name: 'June',
                        sessions: 330,
                        users: 230,
                        volume: 880
                        },
                        {
                        name: 'July',
                        sessions: 470,
                        users: 20,
                        volume: 450
                        },
                        {
                        name: 'August',
                        sessions: 180,
                        users: 220,
                        volume: 104
                        },
                        {
                        name: 'September',
                        sessions: 360,
                        users: 200,
                        volume: 879
                        },
                        {
                        name: 'October',
                        sessions: 500,
                        users: 250,
                        volume: 200
                        },
                        {
                        name: 'November',
                        sessions: 404,
                        users: 240,
                        volume: 700
                        },
                        {
                        name: 'December',
                        sessions: 80,
                        users: 280,
                        volume: 604
                        }
                    ]}
                    dimensions={[
                        {
                        accessor: 'name',
                        formatter: function noRefCheck(){}
                        }
                    ]}
                    measures={[
                        {
                        accessor: 'users',
                        formatter: function noRefCheck(){},
                        label: 'Users'
                        },
                        {
                        accessor: 'sessions',
                        formatter: function noRefCheck(){},
                        hideDataLabel: true,
                        label: 'Active Sessions'
                        },
                        {
                        accessor: 'volume',
                        label: 'Vol.'
                        }
                    ]}
                    onDataPointClick={function noRefCheck(){}}
                    onLegendClick={function noRefCheck(){}}
                    style={{
                        height: '60vh'
                    }}
                    />
                </div>
                <div>
                    <ComposedChart
                        chartConfig={{
                            gridHorizontal: true,
                            gridStroke: 'var(--sapList_BorderColor)',
                            gridVertical: false,
                            legendHorizontalAlign: 'left',
                            legendPosition: 'bottom',
                            resizeDebounce: 250,
                            xAxisVisible: true,
                            yAxisVisible: false,
                            zoomingTool: false
                        }}
                        dataset={[
                            {
                            name: 'January',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'February',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'March',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'April',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            },
                            {
                            name: 'May',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'June',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'July',
                            sessions: 470,
                            users: 20,
                            volume: 450
                            },
                            {
                            name: 'August',
                            sessions: 180,
                            users: 220,
                            volume: 104
                            },
                            {
                            name: 'September',
                            sessions: 360,
                            users: 200,
                            volume: 879
                            },
                            {
                            name: 'October',
                            sessions: 500,
                            users: 250,
                            volume: 200
                            },
                            {
                            name: 'November',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'December',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            }
                        ]}
                        dimensions={[
                            {
                            accessor: 'name',
                            formatter: function noRefCheck(){},
                            interval: 0
                            }
                        ]}
                        layout="vertical"
                        measures={[
                            {
                            accessor: 'sessions',
                            label: 'Active Sessions',
                            type: 'bar'
                            },
                            {
                            accessor: 'users',
                            formatter: function noRefCheck(){},
                            label: 'Users',
                            type: 'area'
                            },
                            {
                            accessor: 'volume',
                            formatter: function noRefCheck(){},
                            label: 'Vol.',
                            type: 'line'
                            }
                        ]}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            height: '60vh'
                        }}
                        />
                </div>
                <div>
                    <DonutChart
                        chartConfig={{
                            activeSegment: 9,
                            showActiveSegmentDataLabel: true
                        }}
                        dataset={[
                            {
                            name: 'January / Month',
                            users: 100
                            },
                            {
                            name: 'February / Month',
                            users: 230
                            },
                            {
                            name: 'March / Month',
                            users: 240
                            },
                            {
                            name: 'April / Month',
                            users: 280
                            },
                            {
                            name: 'May / Month',
                            users: 100
                            },
                            {
                            name: 'June / Month',
                            users: 230
                            },
                            {
                            name: 'July / Month',
                            users: 20
                            },
                            {
                            name: 'August / Month',
                            users: 220
                            },
                            {
                            name: 'September / Month',
                            users: 200
                            },
                            {
                            name: 'October / Month',
                            users: 250
                            },
                            {
                            name: 'November / Month',
                            users: 240
                            },
                            {
                            name: 'December / Month',
                            users: 280
                            }
                        ]}
                        dimension={{
                            accessor: 'name'
                        }}
                        measure={{
                            accessor: 'users'
                        }}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            width: '50%'
                        }}
                        />
                </div>
                <div>
                    <PieChart
                        chartConfig={{
                            innerRadius: '0%',
                            outerRadius: '80%'
                        }}
                        dataset={[
                            {
                            name: 'January / Month',
                            users: 100
                            },
                            {
                            name: 'February / Month',
                            users: 230
                            },
                            {
                            name: 'March / Month',
                            users: 240
                            },
                            {
                            name: 'April / Month',
                            users: 280
                            },
                            {
                            name: 'May / Month',
                            users: 100
                            },
                            {
                            name: 'June / Month',
                            users: 230
                            },
                            {
                            name: 'July / Month',
                            users: 20
                            },
                            {
                            name: 'August / Month',
                            users: 220
                            },
                            {
                            name: 'September / Month',
                            users: 200
                            },
                            {
                            name: 'October / Month',
                            users: 250
                            },
                            {
                            name: 'November / Month',
                            users: 240
                            },
                            {
                            name: 'December / Month',
                            users: 280
                            }
                        ]}
                        dimension={{
                            accessor: 'name'
                        }}
                        measure={{
                            accessor: 'users'
                        }}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            width: '50%'
                        }}
                        />
                </div>
                <div>
                    <LineChart
                        chartConfig={{
                            gridHorizontal: true,
                            gridStroke: 'var(--sapList_BorderColor)',
                            gridVertical: false,
                            legendHorizontalAlign: 'left',
                            legendPosition: 'bottom',
                            resizeDebounce: 250,
                            xAxisVisible: true,
                            yAxisVisible: false,
                            zoomingTool: false
                        }}
                        dataset={[
                            {
                            name: 'January',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'February',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'March',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'April',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            },
                            {
                            name: 'May',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'June',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'July',
                            sessions: 470,
                            users: 20,
                            volume: 450
                            },
                            {
                            name: 'August',
                            sessions: 180,
                            users: 220,
                            volume: 104
                            },
                            {
                            name: 'September',
                            sessions: 360,
                            users: 200,
                            volume: 879
                            },
                            {
                            name: 'October',
                            sessions: 500,
                            users: 250,
                            volume: 200
                            },
                            {
                            name: 'November',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'December',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            }
                        ]}
                        dimensions={[
                            {
                            accessor: 'name',
                            formatter: function noRefCheck(){},
                            interval: 0
                            }
                        ]}
                        measures={[
                            {
                            accessor: 'users',
                            formatter: function noRefCheck(){},
                            label: 'Users'
                            },
                            {
                            accessor: 'sessions',
                            formatter: function noRefCheck(){},
                            hideDataLabel: true,
                            label: 'Active Sessions'
                            },
                            {
                            accessor: 'volume',
                            label: 'Vol.'
                            }
                        ]}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            width: '100%'
                        }}
                        />
                </div>
                <div>
                    <RadarChart
                        dataset={[
                            {
                            name: 'January',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'February',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'March',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'April',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            },
                            {
                            name: 'May',
                            sessions: 300,
                            users: 100,
                            volume: 756
                            },
                            {
                            name: 'June',
                            sessions: 330,
                            users: 230,
                            volume: 880
                            },
                            {
                            name: 'July',
                            sessions: 470,
                            users: 20,
                            volume: 450
                            },
                            {
                            name: 'August',
                            sessions: 180,
                            users: 220,
                            volume: 104
                            },
                            {
                            name: 'September',
                            sessions: 360,
                            users: 200,
                            volume: 879
                            },
                            {
                            name: 'October',
                            sessions: 500,
                            users: 250,
                            volume: 200
                            },
                            {
                            name: 'November',
                            sessions: 404,
                            users: 240,
                            volume: 700
                            },
                            {
                            name: 'December',
                            sessions: 80,
                            users: 280,
                            volume: 604
                            }
                        ]}
                        dimensions={[
                            {
                            accessor: 'name',
                            formatter: function noRefCheck(){},
                            interval: 0
                            }
                        ]}
                        measures={[
                            {
                            accessor: 'users',
                            formatter: function noRefCheck(){},
                            label: 'Users'
                            },
                            {
                            accessor: 'sessions',
                            formatter: function noRefCheck(){},
                            hideDataLabel: true,
                            label: 'Active Sessions'
                            },
                            {
                            accessor: 'volume',
                            label: 'Vol.'
                            }
                        ]}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            width: '100%'
                        }}
                        />
                </div>
                <div>
                    <ScatterChart
                        chartConfig={{
                            gridHorizontal: true,
                            gridStroke: 'var(--sapList_BorderColor)',
                            gridVertical: false,
                            legendHorizontalAlign: 'left',
                            legendPosition: 'bottom',
                            resizeDebounce: 250,
                            xAxisVisible: true,
                            yAxisVisible: false,
                            zoomingTool: false
                        }}
                        dataset={[
                            {
                            data: [
                                {
                                sessions: 330,
                                users: 120,
                                volume: 744
                                },
                                {
                                sessions: 313,
                                users: 213,
                                volume: 881
                                },
                                {
                                sessions: 424,
                                users: 241,
                                volume: 670
                                },
                                {
                                sessions: 83,
                                users: 328,
                                volume: 630
                                },
                                {
                                sessions: 302,
                                users: 102,
                                volume: 126
                                },
                                {
                                sessions: 304,
                                users: 233,
                                volume: 880
                                },
                                {
                                sessions: 47,
                                users: 202,
                                volume: 452
                                },
                                {
                                sessions: 18,
                                users: 222,
                                volume: 500
                                },
                                {
                                sessions: 362,
                                users: 210,
                                volume: 892
                                },
                                {
                                sessions: 510,
                                users: 215,
                                volume: 2022
                                },
                                {
                                sessions: 402,
                                users: 242,
                                volume: 70
                                },
                                {
                                sessions: 10,
                                users: 20,
                                volume: 60
                                }
                            ],
                            label: 'Americas'
                            },
                            {
                            data: [
                                {
                                sessions: 300,
                                users: 100,
                                volume: 756
                                },
                                {
                                sessions: 330,
                                users: 230,
                                volume: 880
                                },
                                {
                                sessions: 404,
                                users: 240,
                                volume: 700
                                },
                                {
                                sessions: 80,
                                users: 280,
                                volume: 604
                                },
                                {
                                sessions: 300,
                                users: 100,
                                volume: 756
                                },
                                {
                                sessions: 330,
                                users: 230,
                                volume: 880
                                },
                                {
                                sessions: 470,
                                users: 20,
                                volume: 450
                                },
                                {
                                sessions: 180,
                                users: 220,
                                volume: 5000
                                },
                                {
                                sessions: 360,
                                users: 200,
                                volume: 879
                                },
                                {
                                sessions: 500,
                                users: 250,
                                volume: 200
                                },
                                {
                                sessions: 404,
                                users: 240,
                                volume: 700
                                },
                                {
                                sessions: 80,
                                users: 280,
                                volume: 604
                                }
                            ],
                            label: 'APJ',
                            opacity: 0.6
                            }
                        ]}
                        measures={[
                            {
                            accessor: 'users',
                            axis: 'x',
                            label: 'Users'
                            },
                            {
                            accessor: 'sessions',
                            axis: 'y',
                            formatter: function noRefCheck(){},
                            label: 'Sessions'
                            },
                            {
                            accessor: 'volume',
                            axis: 'z'
                            }
                        ]}
                        onDataPointClick={function noRefCheck(){}}
                        onLegendClick={function noRefCheck(){}}
                        style={{
                            width: '100%'
                        }}
                        />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChartsDemo;
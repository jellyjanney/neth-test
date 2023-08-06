function displayCreationTime() {
        const creationTime = new Date();
        document.getElementById('startTimer').innerText = formatDateTime(creationTime);
}

function displayLastModifiedTime() {
        const lastModifiedTime = new Date(document.lastModified);
        document.getElementById('lastTimer').innerText = formatDateTime(lastModifiedTime);
}

function formatDateTime(dateTime) {
        const options = new Date();
        const year = pad(options.getFullYear());
        const month = pad(options.getMonth());
        const date = pad(options.getDate());
        const hours = pad(options.getHours());
        const minutes = pad(options.getMinutes());
        const seconds = pad(options.getSeconds());
      
        const formattedTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return formattedTime;
        
}

function pad(num) {
      return (num < 10 ? '0' : '') + num;
}

displayCreationTime();
displayLastModifiedTime();


var barOptions = {
        series: [{
                name: "Series 1",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }, {
                name: "Series 2",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }, {
                name: "Series 3",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }, {
                name: "Series 4",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }, {
                name: "Series 5",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }, {
                name: "Series 6",
                data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6]
        }],
        chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%',
                offsetY: 0,
                background: '#212529',
                sparkline: {
                        enabled: false,
                }
        },
        plotOptions: {
                bar: {
                        horizontal: true,
                        dataLabels: {
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontFamily: undefined,
                                        fontWeight: 400
                                }
                        },
                },
        },
        stroke: {
                width: 0,
                colors: ['#fff']
        },
        title: {
                text: 'Temperature',
                margin: 10,
                offsetY: 8,
                style: {
                        fontSize:  '16px',
                        fontWeight:  '500',
                        fontFamily: 'Roboto',
                        color:  '#ffffff'
                },
        },
        xaxis: {
                labels: {
                        style: {
                                colors: '#ffffff',
                                fontSize:  '12px',
                                fontWeight:  '500',
                                fontFamily: 'Roboto',
                        },

                },
                categories: [
                        'Battery Sensor-Device04',
                        'Battery Sensor-Device02',
                        'Battery Sensor-Device01',
                        'Battery Sensor-Device05',
                        'Battery Sensor-Device03',
                        'Battery Sensor-Device06',
                        'Battery Sensor-Device07',
                ],
                axisBorder: {
                        show: true,
                        color: '#78909C',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: 0
                },
        },
        dataLabels: {
                enabled: false,
                style: {
                        color: '#fff',
                        fontSize: '12px',
                        fontFamily: undefined,
                        fontWeight: 400
                }
        },
        tooltip: {
                enabled: false,
                y: {
                        formatter: function (val) {
                                return val + "K"
                        }
                }
        },
        fill: {
                opacity: 1,
                type: 'gradient',
                colors: ['#D7263D', '#FA4443', '#F86624', '#F9C80E', '#C5D86D', '#4CAF50'],
                gradient: {
                        shade: 'dark',
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ['#D7263D', '#FA4443', '#F86624', '#F9C80E', '#C5D86D', '#4CAF50'],
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100],
                }

        },
        legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 0,
                show: false,
        },
        theme: {
                mode: 'dark', 
        }
};

var chart = new ApexCharts(document.querySelector("#barChart"), barOptions);
chart.render();


var temOptions = {
        series: [
                {
                        name: "Temperature Sensor-Device04",
                        data: [10, 11, 46, 15, 49, 45, 42, 11, 24]
                },{
                        name: "Temperature Sensor-Device02",
                        data: [25, 40, 21, 35, 48, 41, 33, 23, 46]
                },{
                        name: "Temperature Sensor-Device01",
                        data: [20, 45, 35, 46, 49, 33, 46, 2, 23]
                },{
                        name: "Temperature Sensor-Device08",
                        data: [12, 21, 46, 25, 49, 55, 42, 10, 14]
                },{
                        name: "Temperature Sensor-Device06",
                        data: [55, 60, 21, 35, 48, 21, 33, 23, 15]
                },{
                        name: "Temperature Sensor-Device03",
                        data: [30, 12, 44, 10, 52, 24, 42, 11, 40]
                },{
                        name: "Temperature Sensor-Device05",
                        data: [15, 60, 21, 45, 58, 41, 33, 23, 49]
                },{
                        name: "Temperature Sensor-Device07",
                        data: [25, 45, 20, 35, 25, 45, 10, 48, 19]
                },
        ],
        chart: {
                height: 350,
                type: 'line',
                zoom: {
                        enabled: false
                },
                offsetY: 0,
                background: '#212529',
        },
        dataLabels: {
                enabled: false
        },
        stroke: {
                curve: 'smooth',
                width: 1,
                
        },
        colors: ['#FF4560', '#F9CE1D', '#13D8AA', '#2983FF', '#00E396', '#69D2E7', '#775DD0', '#FF9800'],
        title: {
                text: 'Temperature',
                align: 'left',
                margin: 10,
                offsetY: 8,
                style: {
                        fontSize:  '16px',
                        fontWeight:  '500',
                        fontFamily: 'Roboto',
                        color:  '#ffffff'
                },
        },
        grid: {
                show: true,
                row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                },
                yaxis: {
                        lines: {
                                show: true,
                        }
                },
        },
        xaxis: {
                categories: ['04/17 12:00', '04/18 00:00', '04/18 12:00', '04/19 00:00', '04/19 12:00', '04/20 00:00', '04/20 12:00', '04/21 00:00', '04/21 12:00', '04/22 00:00', '04/22 12:00', '04/23 00:00', '04/23 12:00', '04/24 00:00', '04/24 12:00', '04/25 00:00', '04/25 12:00'],
                lines: {
                        show: true,
                },
        },
        yaxis:{
                logBase: 10,
                tickAmount: 4,
                min: 20,
                max: 50,
                axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                },
        },
        annotations: {
                yaxis: [{
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: -3,
                        width: '100%',
                        yAxisIndex: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'end',
                                position: 'right',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                        padding: {
                                                left: 5,
                                                right: 5,
                                                top: 0,
                                                bottom: 2,
                                        }
                                },
                        },
                }],
                xaxis: [{
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'middle',
                                position: 'top',
                                orientation: 'vertical',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                },
                        },
                }],
        },
        legend: {
                markers: {
                        width: 16,
                        height: 4,
                }
        },
        tooltip: {
                enabled: false,
        },
        theme: {
                mode: 'dark', 
        }
};

var chart2 = new ApexCharts(document.querySelector("#temChart"), temOptions);
chart2.render();



var humOptions = {
        series: [
                {
                        name: "Temperature Sensor-Device04",
                        data: [99, 100, 77, 100, 88, 80, 92, 100, 99]
                },{
                        name: "Temperature Sensor-Device02",
                        data: [100, 99, 100, 91, 100, 90, 100, 85, 98]
                },{
                        name: "Temperature Sensor-Device01",
                        data: [80, 100, 85, 100, 99, 91, 95, 100, 90]
                },{
                        name: "Temperature Sensor-Device08",
                        data: [84, 100, 88, 100, 99, 95, 88, 80, 100]
                },{
                        name: "Temperature Sensor-Device06",
                        data: [98, 100, 89, 99, 100, 91, 100, 99, 100]
                },{
                        name: "Temperature Sensor-Device03",
                        data: [100, 84, 88, 100, 100, 99, 84, 100, 95]
                },{
                        name: "Temperature Sensor-Device05",
                        data: [99, 98, 100, 97, 97, 100, 98, 99, 100]
                },{
                        name: "Temperature Sensor-Device07",
                        data: [100, 81, 100, 99, 100, 91, 100, 100, 100]
                },
        ],
        chart: {
                height: 350,
                type: 'line',
                zoom: {
                        enabled: false
                },
                offsetY: 0,
                background: '#212529',
        },
        dataLabels: {
                enabled: false
        },
        stroke: {
                curve: 'smooth',
                width: 1,
                
        },
        colors: ['#FF4560', '#F9CE1D', '#13D8AA', '#2983FF', '#00E396', '#69D2E7', '#775DD0', '#FF9800'],
        title: {
                text: 'Humidity',
                align: 'left',
                margin: 10,
                offsetY: 8,
                style: {
                        fontSize:  '16px',
                        fontWeight:  '500',
                        fontFamily: 'Roboto',
                        color:  '#ffffff'
                },
        },
        grid: {
                show: true,
                row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                },
                yaxis: {
                        lines: {
                                show: true,
                        }
                },
        },
        xaxis: {
                categories: ['04/17 12:00', '04/18 00:00', '04/18 12:00', '04/19 00:00', '04/19 12:00', '04/20 00:00', '04/20 12:00', '04/21 00:00', '04/21 12:00', '04/22 00:00', '04/22 12:00', '04/23 00:00', '04/23 12:00', '04/24 00:00', '04/24 12:00', '04/25 00:00', '04/25 12:00'],
                lines: {
                        show: true,
                },
                labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: false,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                        trim: false,
                        minHeight: undefined,
                        maxHeight: 120,
                        style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 400,
                                cssClass: 'apexcharts-xaxis-label',
                        },
                        offsetX: 0,
                        offsetY: 0,
                        format: undefined,
                        formatter: undefined,
                        datetimeUTC: true,
                        datetimeFormatter: {
                                year: 'yyyy',
                                month: "MMM 'yy",
                                day: 'dd MMM',
                                hour: 'HH:mm',
                        },
                },
        },
        yaxis:{
                logBase: 10,
                tickAmount: 4,
                min: 40,
                max: 100,
                axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                },
        },
        annotations: {
                yaxis: [{
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: -3,
                        width: '100%',
                        yAxisIndex: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'end',
                                position: 'right',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                        padding: {
                                                left: 5,
                                                right: 5,
                                                top: 0,
                                                bottom: 2,
                                        }
                                },
                        },
                }],
                xaxis: [{
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'middle',
                                position: 'top',
                                orientation: 'vertical',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                },
                        },
                }],
        },
        legend: {
                markers: {
                        width: 16,
                        height: 4,
                }
        },
        tooltip: {
                enabled: false,
        },
        theme: {
                mode: 'dark', 
        }
};

var chart3 = new ApexCharts(document.querySelector("#humChart"), humOptions);
chart3.render();


var soliTemOptions = {
        series: [
                {
                        name: "Temperature Sensor-Device04",
                        data: [27, 25, 30, 34, 45, 30, 42, 45, 33, 38, 40, 30, 25, 45, 35, 33],
                }
        ],
        chart: {
                height: 350,
                type: 'line',
                zoom: {
                        enabled: false
                },
                offsetY: 0,
                background: '#212529',
        },
        dataLabels: {
                enabled: false
        },
        stroke: {
                curve: 'smooth',
                width: 1,
                colors: '#4CAF50',
        },
        title: {
                text: 'Temperature',
                align: 'left',
                margin: 10,
                offsetY: 8,
                style: {
                        fontSize:  '16px',
                        fontWeight:  '500',
                        fontFamily: 'Roboto',
                        color:  '#ffffff'
                },
        },
        grid: {
                show: true,
                row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                },
                yaxis: {
                        lines: {
                                show: true,
                        }
                },
        },
        xaxis: {
                categories: ['04/17 12:00', '04/18 00:00', '04/18 12:00', '04/19 00:00', '04/19 12:00', '04/20 00:00', '04/20 12:00', '04/21 00:00', '04/21 12:00', '04/22 00:00', '04/22 12:00', '04/23 00:00', '04/23 12:00', '04/24 00:00', '04/24 12:00', '04/25 00:00', '04/25 12:00'],
                lines: {
                        show: true,
                },
        },
        yaxis:{
                logBase: 10,
                tickAmount: 5,
                min: 25,
                max: 45,
                axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                },
        },
        annotations: {
                yaxis: [{
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: -3,
                        width: '100%',
                        yAxisIndex: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'end',
                                position: 'right',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                        padding: {
                                                left: 5,
                                                right: 5,
                                                top: 0,
                                                bottom: 2,
                                        }
                                },
                        },
                }],
                xaxis: [{
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'middle',
                                position: 'top',
                                orientation: 'vertical',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                },
                        },
                }],
        },
        legend: {
                markers: {
                        width: 16,
                        height: 4,
                }
        },
        tooltip: {
                enabled: false,
        },
        theme: {
                mode: 'dark', 
        }
};

var soliTem = new ApexCharts(document.querySelector("#soliTemChart"), soliTemOptions);
soliTem.render();



var soliHumOptions = {
        series: [
                {
                        name: "Temperature Sensor-Device04",
                        data: [0.2, 0.25, 0.25, 0.21, 0.21, 0.25, 0.25, 0.2, 0.24, 0.2, 0.2, 0.25, 0.25],
                }
        ],
        chart: {
                height: 350,
                type: 'line',
                zoom: {
                        enabled: false
                },
                offsetY: 0,
                background: '#212529',
        },
        dataLabels: {
                enabled: false
        },
        stroke: {
                curve: 'stepline',
                width: 1,
                colors: '#4CAF50',
        },
        title: {
                text: 'Soli_humidity',
                align: 'left',
                margin: 10,
                offsetY: 8,
                style: {
                        fontSize:  '16px',
                        fontWeight:  '500',
                        fontFamily: 'Roboto',
                        color:  '#ffffff'
                },
        },
        grid: {
                show: true,
                row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                },
                yaxis: {
                        lines: {
                                show: true,
                        }
                },
        },
        xaxis: {
                categories: ['04/17 12:00', '04/18 00:00', '04/18 12:00', '04/19 00:00', '04/19 12:00', '04/20 00:00', '04/20 12:00', '04/21 00:00', '04/21 12:00', '04/22 00:00', '04/22 12:00', '04/23 00:00', '04/23 12:00', '04/24 00:00', '04/24 12:00', '04/25 00:00', '04/25 12:00'],
                lines: {
                        show: true,
                },
                labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: false,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                        trim: false,
                        minHeight: undefined,
                        maxHeight: 120,
                        style: {
                                colors: [],
                                fontSize: '12px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 400,
                                cssClass: 'apexcharts-xaxis-label',
                        },
                        offsetX: 0,
                        offsetY: 0,
                        format: undefined,
                        formatter: undefined,
                        datetimeUTC: true,
                        datetimeFormatter: {
                                year: 'yyyy',
                                month: "MMM 'yy",
                                day: 'dd MMM',
                                hour: 'HH:mm',
                        },
                },
        },
        yaxis:{
                logBase: 10,
                tickAmount: 6,
                min: 0.2,
                max: 0.25,
                axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                },
        },
        annotations: {
                yaxis: [{
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: -3,
                        width: '100%',
                        yAxisIndex: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'end',
                                position: 'right',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                        padding: {
                                                left: 5,
                                                right: 5,
                                                top: 0,
                                                bottom: 2,
                                        }
                                },
                        },
                }],
                xaxis: [{
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                borderRadius: 2,
                                text: undefined,
                                textAnchor: 'middle',
                                position: 'top',
                                orientation: 'vertical',
                                offsetX: 0,
                                offsetY: 0,
                                mouseEnter: undefined,
                                mouseLeave: undefined,
                                click: undefined,
                                style: {
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        fontFamily: 'Roboto',
                                },
                        },
                }],
        },
        legend: {
                markers: {
                        width: 16,
                        height: 4,
                }
        },
        tooltip: {
                enabled: false,
        },
        theme: {
                mode: 'dark', 
        }
};

var soliHum = new ApexCharts(document.querySelector("#soliHumChart"), soliHumOptions);
soliHum.render();
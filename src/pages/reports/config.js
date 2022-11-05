import { groupBy } from "lodash"
import moment from "moment/moment";

const config = {
    cutter: {
        color: '#f00',
        title: 'cutter',
        strokeWidth: 10,
    },
    spreader: {
        color: '#0f0',
        title: 'spreader',
        strokeWidth: 10,
    },
    plotter: {
        color: '#00f',
        title: 'plotter',
        strokeWidth: 10,
    },
};

export const formatMaintenances = (mttos) => {
    const mttosByEquipment = groupBy(mttos, n => n.equipment);

    console.log("mttosByEquipment",mttosByEquipment)

    return Object.entries(mttosByEquipment).map((next) => {
        const [equipment, mttos] = next;

        // console.log("esto es next", next)

        const totals = mttos.reduce((result, mtto) => {
            const date = moment(mtto.date).startOf('day');
            // console.log("date en reduce", date)
            const key = date.format('DD MMM, YYYY');
            // console.log("key en reduce", key)

            if (!result[key]) {
                result[key] = { total: 0, timestamp: date.valueOf() }
            }
            result[key].total += 1;
            // console.log("este es result ", result)
            return result;
        }, {});

        // console.log("este es totals", totals)
        
        const data = Object.entries(totals).map((next) => {
            const [key, value] = next;
            
            return {
                x: key,
                y: value.total,
                timestamp: value.timestamp,
            };
        });
        // console.log("este es data", data)

        const chartConfig = config[equipment];
        
        return {
            title: chartConfig.title,
            color: chartConfig.color,
            data,
        };
    });
}

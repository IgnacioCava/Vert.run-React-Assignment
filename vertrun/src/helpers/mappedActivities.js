import distanceIcon from '../assets/distance.png'
import heightIcon from '../assets/height.png'
import timeIcon from '../assets/time.png'

export default function activityMapper(activityList, distance, uptime, height){
    // This setyp allows for easy mapping in other components
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let mappedActivities = []

    activityList.map(e=>{
        mappedActivities.push({
            time:e.start_date_local.replace('T', ' ').replace('Z', ' ')+e.timezone.split(' ')[0],
            month:months[Number(e.start_date.split('-')[1])-1],
            duration:e.elapsed_time>60?Math.round(e.elapsed_time/60)+'m':e.elapsed_time+'s',
            type:e.type,
            name:e.name,
            stats:[
            distance?{
                type:'Distance',
                icon: distanceIcon,
                total: {value:e.distance, unit:'m'},
                top:{value:Math.round(e.max_speed), unit:'m/s',label:'Top speed'},
                bot:{value:Math.round(e.average_speed), unit:'m/s', label:'Average'},
            }:0,
            uptime?{
                type:'Gained Height',
                icon: heightIcon,
                total: {value:e.total_elevation_gain, unit:'m'},
                top:{value:e.elev_high,  unit:'m', label:'Highest'},
                bot:{value:e.elev_low,  unit:'m', label:'Lowest'}
            }:0,
            height?{
                type:'Uptime',
                icon: timeIcon,
                total: {value:e.moving_time/e.elapsed_time*100, unit:'%'},
                top:{value:e.elapsed_time, unit:'s', label:'Total time'},
                bot:{value:e.moving_time, unit:'s', label:'Moving time'}
            }:0],
        })
    })

    return mappedActivities
}


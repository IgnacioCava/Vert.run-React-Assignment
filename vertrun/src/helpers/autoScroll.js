let repeat=[]

export default function autoScroll(elementId, direction, reset){
if(direction==='down')repeat=['month','right']
if(!elementId&&repeat[0]) {
    document.getElementById(repeat[0]).style.scrollBehavior='auto'
    autoScroll(repeat[0], repeat[1])
    document.getElementById(repeat[0]).style.scrollBehavior='smooth'
}

if(elementId){
        repeat=[elementId, direction]

        let element = document.getElementById(elementId)
        if(reset){
            setTimeout(()=>{
                let res = document.getElementById(reset)
                res.style.scrollBehavior='auto'
                res.scrollTo({
                    top:0,
                    left:0
                })
                res.style.scrollBehavior='smooth'
            }, 500)
        }

        element.scrollTo({
            top:direction==='up'?0:direction==='down'?element.scrollHeight:0,
            left:direction==='left'?0:direction==='right'?element.scrollWidth:0
        })
        if(elementId==='sectors'&&direction==='down'){
            document.getElementById('month').scrollTo({
                top:0,
                left:0
            })
        }
    }
}
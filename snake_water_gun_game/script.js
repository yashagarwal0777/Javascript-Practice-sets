let user = prompt("Enter S , W Or G : ")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuI]
 
const match = (cpu,user)=>{
    if (cpu === user){
        return "Nobody. Match is tie"
    }
    else if(cpu ==="S" && user ==="W"){
        return "cpu"
    }
    else if(cpu ==="S" && user ==="G"){
        return "user"
    }
    else if(cpu ==="G" && user ==="W"){
        return "user"
    }
    else if(cpu ==="G" && user ==="S"){
        return "cpu"
    }
    else if(cpu ==="W" && user ==="S"){
        return "user"
    }
    else if(cpu ==="W" && user ==="G"){
        return "cpu"
    }
}
let result = match(cpu,user)
document.write(`cpu is ${cpu} <br> user is ${user} <br>  THE Winner Is ${result.toUpperCase()}`)
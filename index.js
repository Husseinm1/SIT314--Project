const mongoose = require('mongoose');



var start = new Date().getTime();
mongoose.connect('mongodb+srv://User:password14@ledproject.av35o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology : true})


const yargs = require('yargs');
const argv = yargs
const mqtt = require('mqtt') 

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

var topic="/light" 




const Light = require('./models/light');

const lightdata = { 
   led1:{
        id: 0, 
        name: "Light", 
        address: "221 Burwood Hwy, Burwood VIC 3125", 
        time: Date.now(), 
        light: Math.floor((Math.random() * 1) +0.5),
        
    
    },

    led2 :{ 
        id: 1, 
        name: "Light", 
        address: "221 Burwood Hwy, Burwood VIC 3125", 
        time: Date.now(), 
        light: Math.floor((Math.random() * 1) +0.5),

    },
    
    led3 :{ 
        id: 2, 
        name: "Light", 
        address: "221 Burwood Hwy, Burwood VIC 3125", 
        time: Date.now(), 
        light: Math.floor((Math.random() * 1) +0.5),

    },
    
    led4 : { 
        id: 3, 
        name: "Light", 
        address: "221 Burwood Hwy, Burwood VIC 3125", 
        time: Date.now(), 
        light: Math.floor((Math.random() * 1) +0.5),

    },
    
    led5 :{ 
        id: 4, 
        name: "Light", 
        address: "221 Burwood Hwy, Burwood VIC 3125", 
        time: Date.now(), 
        light: Math.floor((Math.random() * 1) +0.5),
        
    }
} 

   
    if (lightdata.led1.light == 1)
    var status1 ="LED1 is on" 
    else 
    var status1 = "LED1 is off" 

    if (lightdata.led2.light == 1)
    var status2 = "LED1 is on"
    else 
    var status2 = "LED2 is off"

    if (lightdata.led3.light == 1)
    var status3 = "LED3 is on"
    else 
    var status3 = "LED3 is off"

    if (lightdata.led4.light == 1)
    var  status4 = "LED4 is on" 
    else 
    var status4 = "LED4 is off" 

    if (lightdata.led5.light == 1)
    var status5 = "LED5 is on"
    else 
    var status5 = "LED5 is off" 
    
    var data = JSON.stringify(
        { 
            
            status1,
            status2,
            status3,
            status4,
            status5,
           
        });

        
    client.on('connect', () =>  
    { 
        console.log('mqtt connected'); 
        client.publish(topic, status1); 
        console.log('published to Topic: ' + topic + " with Message: " + status1); 
        client.publish(topic, status2); 
        console.log('published to Topic: ' + topic + " with Message: " + status2);
        client.publish(topic, status3); 
        console.log('published to Topic: ' + topic + " with Message: " + status2);
        client.publish(topic, status4); 
        console.log('published to Topic: ' + topic + " with Message: " + status2);
        client.publish(topic, status5); 
        console.log('published to Topic: ' + topic + " with Message: " + status2);
    });

    const jsonString = JSON.stringify(lightdata);
    console.log(jsonString)




 
 const newLight = new Light({
    led1:{
    id: lightdata.led1.id,
    name: lightdata.led1.name,
    address: lightdata.led1.address,
    time: lightdata.led1.time,
    light: lightdata.led1.light,
    status: status1
    },

    led2:{
    id: lightdata.led2.id,
    name: lightdata.led2.name,
    address: lightdata.led2.address,
    time: lightdata.led2.time,
    light: lightdata.led2.light,
    status: status2
    },

    led3:{
    id: lightdata.led3.id,
    name: lightdata.led3.name,
    address: lightdata.led3.address,
    time: lightdata.led3.time,
    light: lightdata.led3.light,
    status: status3
    },

    led4:{
    id: lightdata.led4.id,
    name: lightdata.led4.name,
    address: lightdata.led4.address,
    time: lightdata.led4.time,
    light: lightdata.led4.light,
    status: status4
    },

    led5:{
    id: lightdata.led5.id,
    name: lightdata.led5.name,
    address: lightdata.led5.address,
    time: lightdata.led5.time,
    light: lightdata.led5.light,
    status: status5
    }
   
});



    newLight.save().then(doc => {
    console.log(doc);
    }).then(() => {      
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);  
    mongoose.connection.close();
});

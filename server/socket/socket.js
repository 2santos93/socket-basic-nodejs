const {io} = require('../server');

io.on('connection', (client) => {

    console.log('client connected');

    client.emit('sendMessage', {
        user: 'admin',
        message: "welcome to this app"
    });

    client.on('disconnect', () => {
        console.log("client disconnected")
    });

    // listen client
    client.on('sendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit("sendMessage", data);

        // if(data.user){
        //     callback({
        //         ok:true,
        //         message: "good"
        //     });
        // }else{
        //     callback({
        //         ok:false,
        //         message: "bad"
        //     });
        // }

    });
});
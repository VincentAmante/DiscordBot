module.exports={
    name: "pw",
    description: "announce passwords",

    async run (client,message,args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel){
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else{
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
 
}
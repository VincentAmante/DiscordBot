module.exports = {
    name: 'schedule',
    description: 'Provides class schedule',
    execute(message, args){
        const embed = {
            "color": 1315897,
            "footer": {
              "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "thumbnail": {
              "url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "author": {
              "name": "Class Schedule",
              "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
            },
            "fields": [
              {
                "name": "__**Sunday**__",
                "value": "[Web Development](https://meet.google.com/hoz-wsae-xwn) [9:30 - 11:00]\n\n[Experience Design/UX Design](https://meet.google.com/rrd-dmcf-xxu) [11:30 - 1:00]"
              },
              {
                "name": "__**Monday**__",
                "value": "[Ideation & CBS/Creative Strategies](https://meet.google.com/mif-dtdr-rwg) [9:30 - 11:00]\n\n[Experience Design/UX Design](https://meet.google.com/rrd-dmcf-xxu) [11:30 - 1:00]"
              },
              {
                "name": "__**Wednesday:**__",
                "value": "[Web Development](https://meet.google.com/hoz-wsae-xwn) [9:30 - 11:00]\n\n[Ideation & CBS/Creative Strategies](https://meet.google.com/mif-dtdr-rwg) [11:30 - 1:00]"
              }
            ]
          };
          message.channel.send({ embed });
    }
}

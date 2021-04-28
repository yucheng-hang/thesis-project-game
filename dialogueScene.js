
class dialogueScene extends Phaser.Scene{
    constructor(){
      super("DialogueScene");
    }
    preload(){
        
      
    }
    create(){    
        // add player and npc
        this.player5 = this.add.image(200, game.config.height /2, "player5");
        this.npc1 = this.add.image(800, game.config.height /2, "npc1").setScale(0.7).setInteractive({useHandCursor: true});
        
        this.subtitle = this.add.text(500, game.config.height - 200, 'this is a subtitle test! let us see if it can wrap the words this is a subtitle test! let us see if it can wrap the words',{
            backgroundColor: "#f7eadf",
            padding: 20,
            color: "black",
            wordWrap: { width: 450, useAdvancedWrap: true }
        });
        this.subtitle.setOrigin(0.5,0.5);
        this.subtitle.setScrollFactor(0);
        this.subtitle.setAlpha(0);
        
        
        
        const npc1 = new Npc({
            key: "npc1",
            dialog: {
                hello:{
                    question: true,
                    say: "Hi! What's going on, you lool unhappy?",
                    answers: true,
                    reply: "No one invited me to the class group chat... I’m the only one not invited,and they even gave bad comments onme, I feel really lonely and I’m afraid to talk with my classmates.."
                },
                choice:{
                    question: true,
                    say: "Imaging you are a friend of Allan, what are you willing to do?",
                    answers:[
                        {
                            reply: "I will send a direct message to Allan and say ‘I’m sorry for what happened,don’t listen to them.",
                            linkTo: "result1"
                        },
                        {
                            reply: "",
                            linkTo: "result2"
                        },
                        {
                            reply: "",
                            linkTo: "result3"
                        }
                    ],
                result1: {

                },
                result2: {

                },
                result3: {

                },
                }
            }
            
        })
        
    
        
        this.blurbIndex = 0;
        function showSubtitle(blurb) {
            const line = blurb.say[this.lineIndex];
            this.subtitle.setText(line);
            this.subtitle.setAlpha(1);
        }

        // click npc character to start conversation
        npc1.on('pointerdown', function () {
            // console.log('clicked');
            npc1.readDialog("hello");
           });
        
    }
}




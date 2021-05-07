
class dialogueScene extends Phaser.Scene{
    constructor(){
      super("DialogueScene");
    }

    init(){
        //answers database
        this.answers = [{
            key:'choice1',
            setXY:{
                x: 250,
                y: game.config.height/3*2-50,
                },
            setScale:{
                x: 0.5,
                y: 0.5,
                },
            },
            {
            key:'choice2',
            setXY:{
                x: 450,
                y: game.config.height/3*2-50,
                },
            setScale:{
                x: 0.5,
                y: 0.5,
                },
            },
            {
            key:'choice3',
            setXY:{
                x: 650,
                y: game.config.height/3*2-50,
                },
            setScale:{
                x: 0.5,
                y: 0.5,
                },
            },
            {
            key:'choice4',
            setXY:{
                x: 850,
                y: game.config.height/3*2-50,
                },
            setScale:{
                x: 0.5,
                y: 0.5,
                },
            },]
        
    }


    preload(){
        
      
    }
    create(){       

        this.question = this.add.text(180, 420, 'Imaging you are a friend of Allan, What you are willing to do?',
        {backgroundColor: "#EFCA8F",
        padding: 15,
        color: "black"});

        this.intro = this.add.image(1050, game.config.height/4,'intro').setScale(0.7),
        
        

    this.choices = this.add.group(this.answers);
    
    Phaser.Actions.Call(this.choices.getChildren(), function(choices) {
            //make the choices interactive
            choices.setInteractive();

            //creating uptween animation
            choices.upTween = this.tweens.add({
                targets: choices,
                y: '+=-30',
                duration: 200,
                paused: true,
                // yoyo: true,
            })

            //creating backtween animation
            choices.backTween = this.tweens.add({
                targets: choices,
                y: '-=-30',
                duration: 200,
                paused: true,
                // yoyo: true,
            })

            choices.on('pointerover', function(pointer){
                // console.log('you clicked' + choices.texture.key)
                choices.upTween.restart();
            },this);
    
            choices.on('pointerout', function(pointer){
                // console.log('you clicked' + choices.texture.key)
                choices.backTween.restart();
    
            },this);

            choices.on('pointerdown', function(pointer){
                // console.log('you clicked' + choices.texture.key)
            
                //show the answer response
                this.processAnswer();
    
            },this);

        }, this);
        
    //     // add choices
    //     this.choices = this.add.group(this.answers);

    //     // //getting group array
    //     // let choices = this.answers.getChildren();

    //     // for(let i = 0; i < choices.length; i++) {
    //     //     let choices = choices[i];  
    //     // };
    

    // //answer procressing function
    this.processAnswer = function(userResponse){
        
        if(userResponse == this.answers[0]){
            
            this.result1 = this.add.text(500, game.config.height-200, 'Your message made Allan feel better. He replied ‘Thanks’ to you. But in the last few days, you find that Alan is still unhappy. He always stays alone in his seat. You are wondering if there is anything else you can do... Try it again to help Allan!',{
            backgroundColor: "#EFCA8F",
            padding: 15,
            color: "black",
            alpha: 1,
            wordWrap: { width: 450, useAdvancedWrap: true }
            })
            setTimeout(function(){ result1.alpha = 0}, 500)
        }else if(userResponse == this.answers[1]){
            this.result2 = this.add.text(500, game.config.height-200, 'People in the group chat quickly changed their topic, and they started making fun of another classmate in your class. Alan was still not in it, you find that Allen has become silent and often stays alone. You are wondering if you did something at that time, would the situation be different... Try it again to help Allan!',{
                backgroundColor: "#EFCA8F",
                padding: 15,
                color: "black",
                alpha: 1,
                wordWrap: { width: 450, useAdvancedWrap: true }    
            })
            setTimeout(function(){ result2.alpha = 0}, 500)
        }else if(userResponse == this.answers[2]){
            this.result3 = this.add.text(500, game.config.height-250, 'There was a period of silence in the group chat, but as time passed, this event passed. Allen became as happy as usual.Congratulations!',{
                backgroundColor: "#EFCA8F",
                padding: 15,
                color: "black",
                alpha: 1,
                wordWrap: { width: 450, useAdvancedWrap: true } 
            })
            setTimeout(function(){ result2.alpha = 0}, 500)
        }else{
            this.result4 = this.add.text(200, game.config.height-250, 'Others also spoke in the group chat to express their support for you, Allen was invited into the group chat. Some people also said sorry to Allen. Congratulations! ',{
                backgroundColor: "#EFCA8F",
                padding: 15,
                color: "black",
                alpha: 1,
                wordWrap: { width: 700, useAdvancedWrap: true }  
            })
            setTimeout(function(){ result2.alpha = 0}, 500)
        }
    }
    
        this.subtitle = this.add.text(500, game.config.height/3, 'this is a subtitle test! let us see if it can wrap the words this is a subtitle test! let us see if it can wrap the words',{
            backgroundColor: "#f7eadf",
            padding: 20,
            color: "black",
            wordWrap: { width: 450, useAdvancedWrap: true }
        });
        this.subtitle.setOrigin(0.5,0.5);
        this.subtitle.setScrollFactor(0);
        this.subtitle.setAlpha(0);
        
        const player5 = new Player({
            scene: this,
            key: "player5",
            x: 200,
            y: game.config.height /4,
            dialog: {
                hello:{
                    // question: true,
                    say: "Hi! What's going on, you look unhappy?",
                    // answers: true,
                    // reply: "No one invited me to the class group chat... I’m the only one not invited,and they even gave bad comments onme, I feel really lonely and I’m afraid to talk with my classmates.."
                },
                reply:{
                    // question: true,
                    // say: "Hi! What's going on, you lool unhappy?",
                    // answers: true,
                    say: "No one invited me to the class group chat... I’m the only one not invited,and they even gave bad comments onme, I feel really lonely and I’m afraid to talk with my classmates.."
                },
                
            }
            
        })

        
        const npc1 = new Npc({
            scene: this,
            key: "npc1",
            x: 800,
            y: game.config.height /4,
            dialog: {
                hello:{
                    // question: true,
                    say: "Hi! What's going on, you look unhappy?",
                    // answers: true,
                    reply: "No one invited me to the class group chat... I’m the only one not invited,and they even gave bad comments onme, I feel really lonely and I’m afraid to talk with my classmates.."
                },
                reply:{
                    // question: true,
                    // say: "Hi! What's going on, you lool unhappy?",
                    // answers: true,
                    say: "No one invited me to the class group chat... I’m the only one not invited,and they even gave bad comments onme, I feel really lonely and I’m afraid to talk with my classmates.."
                },
                
            }
            
        })

        npc1.setScale(0.7).setInteractive()
        player5.setInteractive()
        
    
        
        this.blurbIndex = 0;


        

        // //click the player5 to start conversation
        player5.on('pointerdown', function () {
            console.log('clicked');
            player5.readDialog("hello");
            
        });

        // click npc character to start conversation
        npc1.on('pointerdown', function () {
            console.log('clicked');
            npc1.readDialog("reply");
            // text fade out
            // setTimeout(function(){ blurb.alpha = 0}, 5000)
        });
    }
    
    
    
    showSubtitle(blurb) {
        // Fetched the keys for the chosen blurb/object
        let keys = Object.keys(blurb)

        // Gets the "next" line
        const line = blurb[ keys[this.blurbIndex++] ];

        this.subtitle.setText(line);
        this.subtitle.setAlpha(1);
    }    

}




// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    queen:cc.Node = null

    @property(cc.SpriteFrame)
    spriteFrame:cc.SpriteFrame = null

    @property(cc.ScrollView)
    scrollView = null

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.addCategory()

    }

    // 添加类别
    addCategory(){

        let actionoutNode = new cc.Node()
        

        actionoutNode.position = cc.v2(0,-20)
        actionoutNode.addComponent(cc.Button)

        
        actionoutNode.addComponent(cc.Label)
        actionoutNode.addComponent(cc.LabelOutline)
        actionoutNode.getComponent(cc.Label).useSystemFont = true
        actionoutNode.getComponent(cc.Label).string = 'CircleActionOut'
        actionoutNode.getComponent(cc.Label).fontSize = 20
        actionoutNode.getComponent(cc.LabelOutline).color =  cc.Color.BLACK
        this.scrollView.content.addChild(actionoutNode)


       this.addEventMethod(actionoutNode.getComponent(cc.Button),'easeActionOut')


        let a =  actionoutNode.getComponent(cc.Button).getComponent(cc.Label)
        a.string = 'is a string'

        if(a == null){

            console.log('a is a null')

        }else{

            console.log('a is not null')
        }


    }
    easeActionOut(event, customEventData){

        this.queen.runAction(cc.moveTo(1.2,cc.v2(100,100)).easing(cc.easeCircleActionOut()))

    }
    addEventMethod(button,callFunc){

        let eventAction = new cc.Component.EventHandler()
        eventAction.target = this.node
        eventAction.component = 'game'
        eventAction.handler =  callFunc
        eventAction.customEventData = callFunc.toString()

        button.clickEvents.push(eventAction)

    }
    // 缓动淡出动画

    start () {

            let n = new cc.Node()
            n.addComponent(cc.Label)
            n.getComponent('cc.Label').string = 'string'
            n.setPosition(cc.v2(10,-500))
            this.scrollView.content.addChild(n)
            this.scrollView.horizontal = true
            console.log(this.scrollView.content.getContentSize().height)

            console.log(this.scrollView.content.children.length)

    }

    // update (dt) {}
}

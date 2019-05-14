
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component{

     onLoad(){

        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{

                        let pos = event.getLocation()
                        let nodepos = this.node.parent.convertToNodeSpaceAR(pos)
                        this.node.setPosition(nodepos)
               },this)


     }
     onStart(){



     }

}
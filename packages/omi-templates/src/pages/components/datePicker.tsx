/*
 * @Author: 吴华彬
 * @Date: 2025-06-22 12:33:38
 * @LastEditTime: 2025-06-22 12:35:01
 * @LastEditors: 吴华彬
 * @Note: 
 */

import { Component, tag } from 'omi'
import 'omi-form'
import '../../components/input'
import '../../components/omiu/popover'
import '../../components/omiu/calendar'



@tag('o-date-picker')
class DatePicker extends Component<{}>{
    state:any={
        date:''
    }
    render(){
        return <o-popover placement="bottom">
  <o-input type="date" value={this.state.date} label=""></o-input>
  <o-calendar onSelect={e=>{
    this.state.date = e.detail.date
    this.update()
  }} slot="content"></o-calendar>
</o-popover>
    }
}
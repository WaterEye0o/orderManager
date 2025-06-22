/*
 * @Author: 吴华彬
 * @Date: 2025-06-22 18:49:51
 * @LastEditTime: 2025-06-22 18:49:54
 * @LastEditors: 吴华彬
 * @Note: 
 */
/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 12:39:13
 * @LastEditors: 吴华彬
 * @Note: 
 */
import 'omi-form'
import '../../components/datePicker'


const config = {
    validate:(Joi: any)=>Joi.object({
        code:Joi.string().alphanum().min(3).max(30).required(),
        name:Joi.string().alphanum().min(3).max(30).required(),
         price: Joi.string().empty(''),
         num: Joi.string().empty(''),
         totalPrice: Joi.string().empty(''),
         creator: Joi.string().empty(''),
    }),
  components: [
    {
      type: 'h1',
      text: '新增购物车',
    },
    {
      type: 'divider',
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'code',
      placeholder: '编码不能为空',
      label: '编码',
      tooltip: '',
    },
     {
      type: 'input',
      defaultValue: '',
      name: 'name',
      label: '商品名称',
      tooltip: '',
    },
    {
        type: 'input',
        props: { type: 'number' },
        name: 'num',
        label: '数量',
        // placeholder: 'Age',
      },
      {
        type: 'input',
        props: { type: 'number' },
        name: 'price',
        label: '单价',
        // placeholder: 'Age',
      },
      {
        type: 'input',
        props: { type: 'number' },
        name: 'totalPrice',
        label: '总价',
        // placeholder: 'Age',
      },
    {
      type: 'input',
      defaultValue: '',
      name: 'creator',
    //   placeholder: '编码不能为空',
      label: '创建人',
      tooltip: '',
    },
  ],
  submitButton: true,
  resetButton: true,
  primaryColor: '#45a049',
  labelStyle: {
    // width: 125,
    align: 'top', // left, right, top
  },
  style: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
}
export function Add(){
    
    return<o-form config={config} />
}
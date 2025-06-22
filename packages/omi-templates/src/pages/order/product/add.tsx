/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 12:35:38
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
         inventory: Joi.string().empty(''),
         estimateDeliveryDate: Joi.string().empty(''),
         address: Joi.string().empty(''),
    }),
  components: [
    {
      type: 'h1',
      text: '新增商品',
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
      placeholder: '名称不能为空',
      label: '名称',
      tooltip: '',
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
        name: 'inventory',
        label: '库存',
        // placeholder: 'Age',
      },
      {
        type: 'custom',
        component:'o-date-picker',
        props: { type: 'number' },
        name: 'estimateDeliveryDate',
        label: '预计交货日期',
        // placeholder: 'Age',
      },
      {
      type: 'input',
      defaultValue: '',
      name: 'address',
    //   placeholder: '编码不能为空',
      label: '默认发货地',
      tooltip: '',
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
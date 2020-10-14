<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>当前温度</span>
		    <el-button style="float: right; padding: 3px 0" type="text" @click="dataHander">
		    查看数据
			</el-button>
		  </div>
		  <div>
		  		<span class="length0_9_2h1PN" aria-haspopup="true" aria-expanded="false">{{curentT}}
		  			<span style="font-size: 18px; color: rgb(51, 51, 51); margin-left: 4px;">%</span>
		  		</span>  		
		  </div>
		  <time class="time">{{ currentDate }}</time>
		</el-card>


		<div class="model" v-show="isShowMultiple">
		<div class="modelFixed" ref="child">
						<el-form :inline="true" style="margin-top:30px;">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="请输入查询条件：">
                                      <div class="block">
		                                <span class="demonstration">开始时间</span>
		                                <el-date-picker
		                                  v-model="start_time"
		                                  type="datetime"
		                                  placeholder="选择日期时间"
		                                  align="right"
		                                  :picker-options="pickerOptions">
		                                </el-date-picker>
			                              </div>
			                              <div class="block">
			                                <span class="demonstration">结束时间</span>
			                                <el-date-picker
			                                  v-model="end_time"
			                                  type="datetime"
			                                  placeholder="选择日期时间"
			                                  align="right"
			                                  :picker-options="pickerOptions">
			                                </el-date-picker>
	                            		  </div>                             
                                    </el-form-item>
                                </el-col>
	                            <el-col :span="6" style="text-align: right;padding-right:10px;">
                                    <el-button-group>
                                        <el-button type="primary" icon="el-icon-search" @click="queryDeviceData()" >查询
                                        </el-button>                             
                                	</el-button-group>
                                </el-col>

                                <el-col :span="2">
                                    <el-button type="primary">导出Excel</el-button>
                                </el-col>
                                <el-col :span="1">
                                    <el-button type="primary" @click="closeHander">关闭</el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                        <table>
                        	<tr>
                        		<th></th>
                        	</tr>
                        	<tr>
                        		<td></td>
                        	</tr>
                        </table>
		</div>


    </div>
	</div>
</template>

<script>
	export default{
		name:'devicedetail',
		data(){
			return{


				end_time:'',
				start_time:'',
				 pickerOptions: {
				  shortcuts: [{
					text: '今天',
					onClick(picker) {
					  picker.$emit('pick', new Date());
					}
				  }, {
					text: '昨天',
					onClick(picker) {
					  const date = new Date();
					  date.setTime(date.getTime() - 3600 * 1000 * 24);
					  picker.$emit('pick', date);
					}
				  }, {
					text: '一周前',
					onClick(picker) {
					  const date = new Date();
					  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
					  picker.$emit('pick', date);
					}
				  }]
				},
				value1: '',
				value2: '',
				value3: '',

				curentT:'--',
				currentDate: new Date(),
				isShowMultiple: false

			}
		},
		mounted(){
			// console.log(this.$)
			// this.axios.get('http://127.0.0.1:8000')
			this.$route.params.id
			console.log(this.$route.params.pkey)

		},
		methods:{
			queryDeviceData(){
				var that = this
				this.$axios.post('http://127.0.0.1:8000/api/querydevicedata/',{
					id:that.$route.params.id,
					start_time:that.start_time,
					end_time:that.end_time,
				})
				.then(function(res){
					console.log(res)
				})
				.catch(function(error){
					console.log(error)
				})
			},
			dataHander(){
				this.isShowMultiple=true
			},
			closeHander(){
				this.isShowMultiple=false
			},
			setMaskShow(e) {
	        if (!this.$refs.child.contains(e.target)) {
	          this.isShowMultiple = false;
	        	}
	        },
	        getHT(){
	        	this.$axios.get('127.0.0.1')
	        }
		}
	}
</script>

<style>

  .model {
  width: 1200px;
  height: 1200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  margin-bottom:200px;
}
.modelFixed {
  position: absolute;
  top: 120px;
  left: 500px;
  padding: 5px;
  background: #ffffff;
  box-shadow: 3px 2px 5px #7777;
}

  .time {
    font-size: 13px;
    color: #999;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
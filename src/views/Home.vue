<template>
  <div class="home">
    <el-row type="flex">
      <el-col :span="7">
        <el-row type="flex" class="item">
          <el-col :span="8" class="center">
              <img src="../assets/img/person_0.png"/>
          </el-col>
          <el-col :span="16" class="item-content">
            <div>
                <div class="title">
                  个人业务
                </div>
                <div class="content">
                  正在办理
                  <span class="notice"> A1245 </span>
                </div>
                <div class="content">
                  等待人数
                  <span class="notice"> 5 </span>
                </div>
              </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="item">
          <el-col :span="8" class="center">
              <img src="../assets/img/public_0.png"/>
          </el-col>
          <el-col :span="16" class="item-content">
            <div>
                <div class="title">
                  对公业务
                </div>
                <div class="content">
                  正在办理
                  <span class="notice"> A1245 </span>
                </div>
                <div class="content">
                  等待人数
                  <span class="notice"> 5 </span>
                </div>
              </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" class="body-items">
        <router-link to="/ydtd">
          <div class="body-item" style="background:rgb(64,74,77)">
            移动填单
          </div>
        </router-link>
        <router-link to="/tgcp">
          <div class="body-item" style="background:rgb(255,67,48)">
            推广产品
          </div>
        </router-link>
        <router-link to="/ttgl">
          <div class="body-item" style="background:rgb(85,203,157)">
            厅堂管理
          </div>
        </router-link>
        <router-link to="/tsjy">
          <div class="body-item" style="background:rgb(49,202,233)">
            投诉与建议
          </div>
        </router-link>
      </el-col>
      <el-col :span="7">
        <div class="table">
          <p class="table-header">
            <span class="head">已到网点客户列表(<span class="red">{{arrived_customer.total}}</span>)</span>
            <router-link to="/wdkh"><span class="more">更多></span></router-link>
          </p>
          <el-table
        :data="arrived_customer.rows"
        :show-header="false"
        >
          <el-table-column
            prop="custName"
            label="姓名"
          >
          </el-table-column>
          <el-table-column
            prop="tagNames"
            label="标签"
          >
          </el-table-column>
        </el-table>
        </div>
        

        <div class="table">
          <p class="table-header">
            <span class="head">业务预约客户列表(<span class="red">{{order_customer.or.length}}</span>)</span>
            <router-link to="/yykh"><span class="more">更多></span></router-link>
          </p>
          <el-table
        :data="order_customer.or"
        :show-header="false"
        >
          <el-table-column
            prop="customerName"
            label="姓名"
          >
          </el-table-column>
          <el-table-column
            prop="orderName"
            label="业务名称"
          >
          </el-table-column>
          <!-- <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline>
                <el-form-item label="预约业务类型">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="预约金额">
                  <span>{{ props.row.amount }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column> -->
        </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    if (!localStorage.clientId) {
      localStorage.clientId = new Date().getTime() + "";
    }
  },
  mounted() {
    this.initData();
  },
  computed: {
    ...mapState(["arrived_customer", "order_customer"])
  },
  methods: {
    ...mapActions(["action_arrived_customer", "action_order_customer"]),
    async initData() {
      this.action_arrived_customer({
        pageNo: 1,
        pageSize: 10
      });
      this.action_order_customer({
        pageNo: 1,
        pageSize: 10
      });
    }
  }
};
</script>
<style scoped lang="less">
.item {
  border: 1px solid #409eff;
  border-radius: 10px;
  margin: 40px 20px 30px 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 80%;
    text-align: center;
  }
  &-content {
    background: #409eff;
    color: #fff;
    .title {
      font-size: 1.4rem;
      padding: 10px;
    }
    .content {
      font-size: 0.9rem;
      padding: 2px 10px;
    }
    .notice {
      color: red;
      margin: 0 10px;
      display: inline;
    }
  }
}
.body-items {
  margin: 25px 10px;
  .body-item {
    margin: 15px 30px;
    height: calc(~ "(100vh - 160px - 100px - 30px)/4");
    line-height: calc(~ "(100vh - 160px - 100px - 30px)/4");
    text-align: center;
    font-size: 30px;
    letter-spacing: 0.5em;
  }
}
.table {
  margin: 30px 10px;
  width: calc(~ "100% - 20px");
  max-height: calc(~ "(100vh - 160px - 120px)/2");
  overflow: scroll;
  border: 1px solid #eee;
  &-header {
    padding-left: 10px;
    .head {
      text-align: left;
    }
    .more {
      float: right;
      color: blue;
      margin-right: 10px;
    }
  }
}
</style>

<template>
  <Button type="primary" :icon="Check" :loading="true" :loading-icon="Check">button</Button>
  <!-- <Icon>
    <Check style="width: 40px; height: 40px; color: red;" />
  </Icon> -->
  <Container>
    <Header flex style="border: 1px solid red;" height="100px" >header</Header>
    <Container>
      <Aside style="border: 1px solid red;" width="400px">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </Aside>
      <Zmain style="border: 1px solid red;">主体内容</Zmain>
    </Container>
    <ZFooter style="border: 1px solid red;">页脚</ZFooter>
  </Container>
  <ZTag round>标签</ZTag>
  <ZTag type="warning">标签</ZTag>
  <ZTag size="medium" type="error" round closable>标签</ZTag>
  <ZTag size="large" type="processing" closable>标签</ZTag>
  <ZTag type="success" disabled >标签</ZTag>
  <ZTag size="large" type="success" closable>标签</ZTag>
  <Row :space="20">
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
  </Row>

  <div class="asd">
    <p class="qwe">123</p>
  </div>
  <Row :space="20">
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
  </Row>

  <div class="asd">
    <p class="qwe">123</p>
  </div>
</template>

<script setup lang="ts">
import Button from "../packages/components/Button/ZButton.vue";
import Icon from "../packages/components/Icon/ZIcon.vue"
import Container from "../packages/components/Container/ZContainer.vue"
import Header from "../packages/components/Container/ZHeader.vue"
import Aside from "../packages/components/Container/ZAside.vue"
import Zmain from "../packages/components/Container/ZMain.vue"
import ZFooter from "../packages/components/Container/ZFooter.vue"
import ZTag from "../packages/components/Tag/ZTag.vue";
import Row from "../packages/components/Layout/ZRow.vue"
import Col from '../packages/components/Layout/ZCol.vue'

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<style scoped lang="postcss">
.asd {
  color: red;

  >p {
    color: yellow;
  }
}
<style scoped lang="postcss">
.asd {
  color: red;

  >p {
    color: yellow;
  }
}
</style>
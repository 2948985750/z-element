<template>
  <Button type="primary" :icon="Check" :loading="true" :loading-icon="Check">button</Button>
  <Icon>
    <Check style="width: 40px; height: 40px; color: red;" />
  </Icon>
  <Container>
    <Header flex style="border: 1px solid red;" height="100px">header</Header>
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
  <Row :space="20">
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
    <Col :span="12" :md="4" :lg="4" style="border: 1px solid red">123</Col>
  </Row>
</template>

<script setup lang="ts">
import Button from "../packages/components/Button/ZButton.vue";
import Icon from "../packages/components/Icon/ZIcon.vue"
import Container from "../packages/components/Container/ZContainer.vue"
import Header from "../packages/components/Container/ZHeader.vue"
import Aside from "../packages/components/Container/ZAside.vue"
import Zmain from "../packages/components/Container/ZMain.vue"
import ZFooter from "../packages/components/Container/ZFooter.vue"
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

<style lang="postcss">
@tailwind base;
</style>
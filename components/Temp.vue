<template>
  <div>
    <template>
      <p>ログインしています</p>
      <button @click="$store.dispatch('task/addTask')">ログアウト</button>
    </template>
    <div>
      {{ $store.state }}
    </div>
  </div>
</template>

<template>
    <div>
        <ul ref="userList">
            <li v-for="user in UsersLists">
                {{ user.firstName }} {{ user.lastName }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import getUsers from '../api/getDataUsers';
import {ref} from "vue"
import { useInfiniteScroll } from '@vueuse/core'

const qtUsers = 15;
const userList = ref(null);

const UsersLists = ref(await getUsers(qtUsers,0));

const getDataUsersScroll =async () => {
    const newUsers =  await getUsers(qtUsers,UsersLists.value.length);
    UsersLists.value.push(...newUsers);
}


// useInfiniteScroll(
//   userList,
//   async () => {
//    await getDataUsersScroll()
//   },
//   { distance: 10 }
// );



</script>

<style scoped>

ul{
    background-color: #41b480;
    list-style: none;
    max-height: 450px;
    width: 600px;
    overflow: scroll;
    padding: 12px 20px;
    margin-top: 20px;
}

ul li{
    padding: 10px 0;
    color: #fff;
    font-size: 18px;
}

</style>
<script setup>
    import { useStore } from "vuex";
    import { computed } from "@vue/runtime-core";
    import { onMounted } from "vue";
    // import { useCanvas2Image } from "@/composition-api/index.js";
    import { htmlToCanvas } from "html2canvas";

    onMounted (() => {

        const elButtonFrontEndCamera = document.getElementById('button--frontEndCamera');
        const elButtonBackEndCamera = document.getElementById('button--backEndCamera');
        const elButtonSaveScreenshot = document.querySelector('.button--saveScreenshot');

        // elButtonSaveScreenshot.addEventListener('click', e => {
        //     e.preventDefault();
        //     htmlToCanvas('wrap');
        // });

        elButtonFrontEndCamera.addEventListener('change', handleFilesImage, false);
        elButtonBackEndCamera.addEventListener('change', handleFilesImage, false);

        function handleFilesImage() {
            const fileData = this.files;
            const reader = new FileReader();

            reader.addEventListener('load', file => {
                const img = document.querySelector('.capturePicture');

                img.src = file.target.result;
            });

            reader.readAsDataURL(fileData[0]);
        }
    });
</script>

<template>
    <div id="wrap" class="wrap">

        <!-- 開啟 前鏡頭 拍照 -->
        <label for="button--frontEndCamera" class="button--frontEndCamera">開啟前鏡頭拍照</label>
        <input id="button--frontEndCamera" class="hidden" type="file" capture="user" accept="image/*" mutiple="mutiple" />
        <br />
        <br />

        <!-- 開啟 後鏡頭 拍照 -->
        <label for="button--backEndCamera" class="button--backEndCamera">開啟後鏡頭拍照</label>
        <input id="button--backEndCamera" class="hidden" type="file" capture="environment" accept="image/*" mutiple="mutiple" />

        <img class="capturePicture" />

        <!-- <div class="button--saveScreenshot">擷取照片</div> -->
    </div>
</template>

<style lang="scss">
    // * {
    //     outline: 1px solid;
    // }

    @include mobile {
        .wrap {
            width: 100vw;
            height: 100vh;
            background: url("~@/assets/images/index_cappuccino.png") no-repeat;
            background-position: center;
            background-size: contain;

            .hidden {
                display: none;
            }

            .button--frontEndCamera, .button--backEndCamera, .button--saveScreenshot {
                padding: vwL(20);
                border: vwL(2) solid gold;
                border-radius: 5px;
                letter-spacing: 0.1em;
                color: #FFFF;
                background-color: green;
                position: fixed;
            }

            .button--frontEndCamera {
                top: 70%;
                left: 3%;
            }

            .button--backEndCamera {
                top: 70%;
                right: 3%;
            }

            .capturePicture {
                width: 35vw;
                height: 35vw;
                border: vwL(2) solid rgba(255, 255, 255, 0.1);
                object-fit: cover;
                position: fixed;
                top: 45%;
                left: 35%;
            }

            .button--saveScreenshot {
                bottom: 5%;
                left: 39%;
            }
        }
    }
</style>

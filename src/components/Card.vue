<template>
    <div class="card">
        <div>
            <a :href="getPagePath" >
                <img class="img-resonsive" :src="getFullPathImage" alt="">
            </a>
        </div>
        <div class="text">
            {{card.node.title}}
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            url: "https://www.pinkvilla.com/"
        }
    },
    props:{
        card:Object
    },
    computed: {
        getFullPathImage(){
            return this.url + this.card.node.field_photo_image_section
        },
        getPagePath(){
            return this.url + this.card.node.path
        }
    }
}
</script>
<style lang="scss" scoped>
.card{
    display: flex;
    max-width: 350px;
    margin: 0 auto;
    margin-top: 20px;
    
    .img-resonsive{
        width: 200px;
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        max-width: 100%;
    }
    .text{
        text-align: left;
        flex: 1;
        margin-left: 15px;
    }
}
</style>
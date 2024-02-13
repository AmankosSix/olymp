<template>
  <section class="mt-10">
    <v-container>
      <div class="about__docs">
        <!-- <h1 class="about__app__list--title">О нас</h1> -->
        <div class="about__doc__tabs">
          <div
            class="about__doc__tabs--item"
            :class="{ active: active === item.id }"
            v-for="item in data?.categories"
            :key="item.id"
            @click="sendParentDoc(item.id)"
          >
            <v-icon x-large>mdi-file-document-outline</v-icon>
            <p class="mb-0">{{ item.name }}</p>
          </div>
        </div>
        <v-expansion-panels
          v-if="data?.tabs.length"
          v-model="panel"
          class="about__doc__list"
        >
          <v-expansion-panel v-for="(item, i) in data?.tabs" :key="i">
            <v-expansion-panel-header class="about__doc__list--header">
              {{ item.name }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="about__doc__list__docs">
              <div
                class="about__doc__list__docs--item"
                v-for="doc in item.docs"
                :key="doc.id"
                @click="downloadFile(doc)"
              >
                <base-icon
                  width="512"
                  height="512"
                  :icon="typeFile(doc.file)"
                />
                <p class="mb-0">
                  {{ doc.name }}
                </p>
                <v-icon>mdi-download</v-icon>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p v-else>Документы отсутсвуют</p>
        <!-- <v-row>
          <v-col cols="12" sm="3" v-for="(item, i) in list" :key="i">
            <div class="about__app__list--item">
              <c-img :src="item.img" alt="" defaultType="images/sections" />
              <div class="about__app__list--item__info">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </v-col>
        </v-row> -->
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "docsList",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      panel: 0,
      active: 1,
    };
  },
  computed: {
    docsBaseUrl() {
      return process.env.VUE_APP_DOCS_BASE_URL;
    },
  },
  methods: {
    typeFile(type) {
      const typeArr = type?.split(".");
      if (typeArr)
        return typeArr[typeArr?.length - 1] === "pdf" ? "pdfIcon" : "wordFile";
      else "pdfIcon";
    },
    sendParentDoc(id) {
      this.panel = 0;
      this.active = id;
      this.$emit("setTab", id);
    },
    async downloadFile(doc) {
      try {
        const response = await fetch(this.docsBaseUrl + doc.file);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = doc.name; // Имя, под которым файл будет сохранен

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      }
    },
  },
};
</script>

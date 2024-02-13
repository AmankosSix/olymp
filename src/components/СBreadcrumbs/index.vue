<template>
  <nav>
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CBreadcrumbs",
  computed: {
    breadcrumbs() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift(); // Удалите первый пустой элемент из массива

      let breadcrumbs = pathArray.map((path, index, arr) => {
        return {
          text: this.generateBreadcrumbName(
            path,
            arr.slice(0, index + 1).join("/")
          ),
          to: "/" + arr.slice(0, index + 1).join("/"),
        };
      });

      return breadcrumbs;
    },
  },
  methods: {
    generateBreadcrumbName(path, fullPath) {
      // Метод для динамической генерации текста для хлебных крошек.
      // На основе текущего пути и полного пути маршрута

      // Например, для динамических маршрутов, можно проверить:
      if (fullPath === "/news/" + path) {
        return "Детали новости " + path; // Здесь 'path' будет ID новости
      }
      // Добавьте больше условий для других маршрутов или используйте свою логику
      // ...

      // Для простых маршрутов, можно просто возвращать название:
      return path;
    },
  },
};
</script>

<style>
/* добавьте свои стили, если нужно */
</style>

<template>
  <v-container fluid>
    <v-row>
      <v-card
          v-for="(card, index) in cards"
          :key="index"
          class="mx-auto"
          style="height:300px; width:300px; margin-bottom:20px;"
          outlined
      >
        <v-list-item>
          <v-icon style="margin-top: 30%; margin-left: 37.5%;" color="primary" size="64">mdi-apps</v-icon>
        </v-list-item>
        <v-card-actions>
          <v-btn
              class="mx-auto"
              outlined
              rounded
              :to="card.link"
              style="font-weight:500; font-size:20px; border:solid 2px; max-width:250px; overflow:hidden; margin-top: 10%;"
          >
              {{ card.text }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    cards: [
      {
          text: "전환서비스",
          link: "/conversionServices",
      },
      {
          text: "상품 추천 메시지",
          link: "/recommendMessages",
      },
      {
          text: "고객",
          link: "/customerInfos",
      },
      {
          text: "장례 정보",
          link: "/funeralInfos",
      },
      {
          text: "부고장",
          link: "/obituaries",
      },
      {
          text: "사망신고서",
          link: "/deathReports",
      },
      {
          text: "장례일정표",
          link: "/schedules",
      },
      {
          text: "CustomerReadModel",
          link: "/customerReadModels",
      },
      {
          text: "직원",
          link: "/managers",
      },
      {
          text: "고객",
          link: "/customerProfiles",
      },
      {
          text: "유가족",
          link: "/families",
      },
      {
          text: "추모관",
          link: "/memorials",
      },
      {
          text: "영상",
          link: "/videos",
      },
      {
          text: "사진",
          link: "/photos",
      },
      {
          text: "댓글",
          link: "/comments",
      },
      {
          text: "추모사",
          link: "/tributes",
      },
      {
          text: "사망률 예측",
          link: "/deathPredictions",
      },
      {
          text: "FuneralPython",
          link: "/funeralPythons",
      },
    ],
  }),
};
</script>

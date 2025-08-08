import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Index.vue'),
    },
    {
      path: '/conversionServices',
      component: () => import('../components/ui/ConversionServiceGrid.vue'),
    },
    {
      path: '/recommendMessages',
      component: () => import('../components/ui/RecommendMessageGrid.vue'),
    },
    {
      path: '/customerInfos',
      component: () => import('../components/CustomerInfoView.vue'),
    },
    {
      path: '/funeralInfos',
      component: () => import('../components/ui/FuneralInfoGrid.vue'),
    },
    {
      path: '/obituaries',
      component: () => import('../components/ui/ObituaryGrid.vue'),
    },
    {
      path: '/deathReports',
      component: () => import('../components/ui/DeathReportGrid.vue'),
    },
    {
      path: '/schedules',
      component: () => import('../components/ui/ScheduleGrid.vue'),
    },
    {
      path: '/customerReadModels',
      component: () => import('../components/CustomerReadModelView.vue'),
    },
    {
      path: '/managers',
      component: () => import('../components/ui/ManagerGrid.vue'),
    },
    {
      path: '/customerProfiles',
      component: () => import('../components/ui/CustomerProfileGrid.vue'),
    },
    {
      path: '/families',
      component: () => import('../components/ui/FamilyGrid.vue'),
    },
    {
      path: '/memorials',
      component: () => import('../components/ui/MemorialGrid.vue'),
    },
    {
      path: '/videos',
      component: () => import('../components/ui/VideoGrid.vue'),
    },
    {
      path: '/photos',
      component: () => import('../components/ui/PhotoGrid.vue'),
    },
    {
      path: '/comments',
      component: () => import('../components/ui/CommentGrid.vue'),
    },
    {
      path: '/tributes',
      component: () => import('../components/ui/TributeGrid.vue'),
    },
    {
      path: '/deathPredictions',
      component: () => import('../components/ui/DeathPredictionGrid.vue'),
    },
    {
      path: '/funeralPythons',
      component: () => import('../components/ui/FuneralPythonGrid.vue'),
    },
  ],
})

export default router;

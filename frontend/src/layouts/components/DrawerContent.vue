<script setup>
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
</script>

<template>
    <ul>
        <VerticalNavSectionTitle :item="{ heading: '전환서비스' }" />
        <VerticalNavLink
            :item="{
                title: '전환서비스',
                to: '/conversionServices',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '상품 추천 메시지',
                to: '/recommendMessages',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '고객',
                to: '/customerInfos',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'funeral-context' }" />
        <VerticalNavLink
            :item="{
                title: '장례 정보',
                to: '/funeralInfos',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '부고장',
                to: '/obituaries',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '사망신고서',
                to: '/deathReports',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '장례일정표',
                to: '/schedules',
            }"
        />
        <VerticalNavLink
            :item="{
                title: 'CustomerReadModel',
                to: '/customerReadModels',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'user-context' }" />
        <VerticalNavLink
            :item="{
                title: '직원',
                to: '/managers',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '고객',
                to: '/customerProfiles',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '유가족',
                to: '/families',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'memorial-context' }" />
        <VerticalNavLink
            :item="{
                title: '추모관',
                to: '/memorials',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '영상',
                to: '/videos',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '사진',
                to: '/photos',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '댓글',
                to: '/comments',
            }"
        />
        <VerticalNavLink
            :item="{
                title: '추모사',
                to: '/tributes',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: '인구사망률 데이터 분석 (인력배치)' }" />
        <VerticalNavLink
            :item="{
                title: '사망률 예측',
                to: '/deathPredictions',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'funeral-context-ai' }" />
        <VerticalNavLink
            :item="{
                title: 'FuneralPython',
                to: '/funeralPythons',
            }"
        />
    </ul>
</template>

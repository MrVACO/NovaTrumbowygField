<template>
    <PanelItem :index="index" :field="field" :fieldName="fieldName">
        <template #value>
            <excerpt :content="field.value" :should-show="field.shouldShow" />
        </template>
    </PanelItem>
</template>

<script>
export default {
    props: ['index', 'field', 'fieldName'],
}
</script>

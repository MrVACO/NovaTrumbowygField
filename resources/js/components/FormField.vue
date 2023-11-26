<template>
    <DefaultField :field="currentField" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <div :class="[errorClasses, errorClasses.length ? 'orm-input-border-error' : '']" @keydown.stop>
                <Trumbowyg v-model="value" :config="field.options" />
            </div>
        </template>
    </DefaultField>
</template>

<script>
import { DependentFormField, HandlesValidationErrors } from 'laravel-nova';
import Trumbowyg from 'vue-trumbowyg';

export default {
    mixins: [HandlesValidationErrors, DependentFormField],
    
    props: ['resourceName', 'resourceId', 'field'],
    
    components: {Trumbowyg},
    
    methods: {
        setInitialValue() {
            this.value = this.field.value || '';
        },
        
        fill(formData) {
            formData.append(this.field.attribute, this.value || '');
        },
        
        handleChange(value) {
            this.value = value;
        },
    },
};
</script>

<style lang="scss">
@import "resources/scss/form-field.scss";
</style>
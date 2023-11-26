<?php

namespace MrVaco\NovaTrumbowygField;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Nova::serving(function(ServingNova $event)
        {
            $locale = app()->getLocale();
            
            Nova::script('nova-trumbowyg-field-' . $locale, __DIR__ . '/../dist/js/field.' . $locale . '.js');
            Nova::style('nova-trumbowyg-field', __DIR__ . '/../dist/css/field.css');
        });
    }
}

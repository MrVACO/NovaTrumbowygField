<?php

namespace MrVaco\NovaTrumbowygField;

use Laravel\Nova\Fields\Expandable;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Fields\SupportsDependentFields;

class NovaTrumbowygField extends Field
{
    use Expandable, SupportsDependentFields;
    
    public $component = 'nova-trumbowyg-field';
    public $fullWidth = true;
    
    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
        
        $this->hideFromIndex();
        
        $this->withMeta([
            'options' => [
                'resetCss'           => true,
                'removeFormatPasted' => true,
                'lang'               => app()->getLocale()
            ]
        ]);
    }
    
    public function jsonSerialize(): array
    {
        return array_merge(parent::jsonSerialize(), [
            'shouldShow' => $this->shouldBeExpanded(),
            'fullWidth'  => $this->fullWidth,
        ]);
    }
}

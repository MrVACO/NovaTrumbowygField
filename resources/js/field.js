import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    new MutationObserver(() => {
        const cls = document.documentElement.classList;
        const isDarkMode = cls.contains('dark');
        
        if (isDarkMode && !cls.contains('trumbowyg-dark')) {
            cls.add('trumbowyg-dark');
        } else if (!isDarkMode && cls.contains('trumbowyg-dark')) {
            cls.remove('trumbowyg-dark');
        }
    }).observe(document.documentElement, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
    });
    
    app.component('detail-nova-trumbowyg-field', DetailField)
    app.component('form-nova-trumbowyg-field', FormField)
})

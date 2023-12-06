import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.h-r.caption'),
          title: i18n.t('forms.application.sitemap.h-r.title'),
          children: [{
            link: 'i-i-s-h-r-отдел-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-отдел-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-h-r-должность-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-должность-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-h-r-т-ч-отчета-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-т-ч-отчета-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-т-ч-отчета-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-h-r-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-сотрудник-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-h-r-анкета-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-анкета-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-анкета-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-h-r-физ-лицо-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-физ-лицо-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-физ-лицо-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})
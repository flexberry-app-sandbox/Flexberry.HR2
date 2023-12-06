import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHRАнкетаLForm from './forms/i-i-s-h-r-анкета-l';
import IISHRДолжностьLForm from './forms/i-i-s-h-r-должность-l';
import IISHRОтделLForm from './forms/i-i-s-h-r-отдел-l';
import IISHRОтчетEForm from './forms/i-i-s-h-r-отчет-e';
import IISHRСотрудникLForm from './forms/i-i-s-h-r-сотрудник-l';
import IISHRТЧ_отчетаLForm from './forms/i-i-s-h-r-т-ч-отчета-l';
import IISHRФиз_лицоLForm from './forms/i-i-s-h-r-физ-лицо-l';
import IISHRАнкетаEForm from './forms/i-i-s-h-r-анкета-e';
import IISHRДолжностьEForm from './forms/i-i-s-h-r-должность-e';
import IISHRОтделEForm from './forms/i-i-s-h-r-отдел-e';
import IISHRСотрудникEForm from './forms/i-i-s-h-r-сотрудник-e';
import IISHRТЧ_отчетаEForm from './forms/i-i-s-h-r-т-ч-отчета-e';
import IISHRФиз_лицоEForm from './forms/i-i-s-h-r-физ-лицо-e';
import IISHRАнкетаModel from './models/i-i-s-h-r-анкета';
import IISHRДолжностьModel from './models/i-i-s-h-r-должность';
import IISHRОтделModel from './models/i-i-s-h-r-отдел';
import IISHRОтчетModel from './models/i-i-s-h-r-отчет';
import IISHRСотрудникModel from './models/i-i-s-h-r-сотрудник';
import IISHRТЧ_отчетаModel from './models/i-i-s-h-r-т-ч-отчета';
import IISHRФиз_лицоModel from './models/i-i-s-h-r-физ-лицо';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-r-анкета': IISHRАнкетаModel,
    'i-i-s-h-r-должность': IISHRДолжностьModel,
    'i-i-s-h-r-отдел': IISHRОтделModel,
    'i-i-s-h-r-отчет': IISHRОтчетModel,
    'i-i-s-h-r-сотрудник': IISHRСотрудникModel,
    'i-i-s-h-r-т-ч-отчета': IISHRТЧ_отчетаModel,
    'i-i-s-h-r-физ-лицо': IISHRФиз_лицоModel
  },

  'application-name': 'HR',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'HR',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HR',
          title: 'HR'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'h-r': {
          caption: 'HR',
          title: 'HR',
          'i-i-s-h-r-отдел-l': {
            caption: 'Отдел',
            title: ''
          },
          'i-i-s-h-r-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-h-r-т-ч-отчета-l': {
            caption: 'Т ч_отчета',
            title: ''
          },
          'i-i-s-h-r-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-h-r-анкета-l': {
            caption: 'Анкета',
            title: ''
          },
          'i-i-s-h-r-физ-лицо-l': {
            caption: 'Физ_лицо',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-h-r-анкета-l': IISHRАнкетаLForm,
    'i-i-s-h-r-должность-l': IISHRДолжностьLForm,
    'i-i-s-h-r-отдел-l': IISHRОтделLForm,
    'i-i-s-h-r-отчет-e': IISHRОтчетEForm,
    'i-i-s-h-r-сотрудник-l': IISHRСотрудникLForm,
    'i-i-s-h-r-т-ч-отчета-l': IISHRТЧ_отчетаLForm,
    'i-i-s-h-r-физ-лицо-l': IISHRФиз_лицоLForm,
    'i-i-s-h-r-анкета-e': IISHRАнкетаEForm,
    'i-i-s-h-r-должность-e': IISHRДолжностьEForm,
    'i-i-s-h-r-отдел-e': IISHRОтделEForm,
    'i-i-s-h-r-сотрудник-e': IISHRСотрудникEForm,
    'i-i-s-h-r-т-ч-отчета-e': IISHRТЧ_отчетаEForm,
    'i-i-s-h-r-физ-лицо-e': IISHRФиз_лицоEForm
  },

});

export default translations;

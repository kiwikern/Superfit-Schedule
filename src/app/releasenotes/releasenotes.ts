import { Release } from './release/release.interface';
import { ChangeType } from './entry/type.enum';

export const releasenotes: Release[] = [
  {
    version: 'v2.18',
    date: new Date(2018, 0, 13),
    entries: [
      {
        title: 'Kurspläne Neukölln',
        type: ChangeType.CHANGE,
        description: `Der Kursplan für Neukölln kann aus technischen Gründen leider nicht zur Verfügung gestellt werden.
        Der Kursplan für Neukölln women wurde hinzugefügt.`
      },
      {
        title: 'Updateprozess',
        type: ChangeType.PERFORMANCE,
        description: `Der Updateprozess und die Offlineverfügbarkeit wurden verbessert`
      }
    ]
  },
  {
    version: 'v2.17',
    date: new Date(2017, 10, 11),
    entries: [
      {
        title: 'Kurswahllayout',
        type: ChangeType.CHANGE,
        description: `Das Layout der Kurswahl wurde verbessert. Nun siehst du auf einen Blick, welche Einstellungen
        du gesetzt hast.`
      },
      {
        title: 'Verbesserte Navigation',
        type: ChangeType.CHANGE,
        description: `Der Zurückpfeil führt nun direkt zur zuletzt aufgerufenen Hauptseite.`
      },
      {
        title: 'Performanceverbesserung',
        type: ChangeType.PERFORMANCE,
        description: `Die App braucht nun weniger Speicherplatz und wird dadurch schneller geladen.`
      },
      {
        title: 'Kursplan abgeschnitten',
        type: ChangeType.FIX,
        description: `Beim Kursplanlayout 'nebeneinander' wurde der erste Tag abgeschnitten,
        wenn der Platz nicht ausreichte.`
      },
      {
        title: 'Benachrichitung über Fehler',
        type: ChangeType.FEATURE,
        description: `Du wirst von nun an benachrichtigt, wenn in der App ein Fehler auftritt.`
      }
    ]
  },
  {
    version: 'v2.16',
    date: new Date(2017, 9, 21),
    entries: [
      {
        title: 'Kommentare entfernt',
        type: ChangeType.FIX,
        description: `Da die Kursleiter aus Datenschutzgründen nicht gelistet werden dürfen, wurde die Kommentarfunktion
        vorerst deaktiviert. :-(`
      },
      {
        title: 'Performanceverbesserungen',
        type: ChangeType.PERFORMANCE,
        description: `Deutliche Performance Verbesserungen vor allem im Kursplan.`
      },
      {
        title: 'Neue Kurse',
        type: ChangeType.CHANGE,
        description: `Neue Kurse Twerkout und BodyPump 45 hinzugefügt.`
      }
    ]
  },
  {
    version: 'v2.15',
    date: new Date(2017, 8, 2),
    entries: [
      {
        title: 'Kursplantoolbar',
        type: ChangeType.CHANGE,
        description: `Die Kursplantoolbar ist nach unten gewandert und hat eine Beschriftung erhalten,
        damit du dich noch besser zurecht findest.`
      },
      {
        title: 'Account',
        type: ChangeType.CHANGE,
        description: `Über die Statusleiste kommst du nun direkt zu deinem Account bzw. dem Login.`
      },
      {
        title: 'Login',
        type: ChangeType.FIX,
        description: `Wenn ein Login notwendig ist, hast du nun die Möglichkeit ohne Login zurückzuspringen.`
      },
      {
        title: 'Kommentare',
        type: ChangeType.CHANGE,
        description: `Wenn es noch keinen Kommentar für einen Kurs gibt,
        werden die anderen Kommentare automatisch eingeblendet.`
      },
      {
        title: 'Layout',
        type: ChangeType.CHANGE,
        description: `Das Layout ist nun an vielen Stellen aufgeräumter.`
      }
    ]
  },
  {
    version: 'v2.14',
    date: new Date(2017, 7, 11),
    entries: [
      {
        title: 'Kommentare',
        type: ChangeType.FEATURE,
        description: `Ab jetzt kannst du über das Sprechblasensymbol im Kursplan zu jedem Kurs einen Kommentar
        hinterlassen und die der anderen Mitglieder einsehen.
         Schau dir an, wie voll der Kurs ist, was ihn besonders macht und welcher Trainer ihn gibt. Es werden weitere
         Funktionalitäten wie Editieren, Löschen... folgen. Hast du einen Fehler bemerkt oder dir fehlt eine bestimmte
         Funktionalität? Teile es mir über den Menüpunkt Feedback mit.`
      },
      {
        title: 'Kursplantoolbar',
        type: ChangeType.CHANGE,
        description: `Die Kursplantoolbar enthält nun auch einen Link zu den Änderungen des Kursplans.`
      },
      {
        title: 'Kursplantoolbar',
        type: ChangeType.FIX,
        description: `Die Adressleiste wird beim Herunterscrollen in mobilen Browsern versteckt.`
      },
      {
        title: 'Kursplanänderungen',
        type: ChangeType.PERFORMANCE,
        description: `Die Kursplanänderungen werden nun schneller dargstellt.`
      },
      {
        title: 'Ladebildschirm',
        type: ChangeType.CHANGE,
        description: `Der Ladebildschirm passt zum Layout und enthält eine kurze Featurebeschreibung.`
      },
      {
        title: 'Feedback',
        type: ChangeType.CHANGE,
        description: `Besseres Layout beim Hinzufügen von neuem Feedback.`
      },
      {
        title: 'BodyStep',
        type: ChangeType.FIX,
        description: `BodyStep wurde vollständig zu LMI Step umbenannt.`
      },
      {
        title: 'Scrollverhalten',
        type: ChangeType.CHANGE,
        description: `Das Scrollverhalten hat sich verbessert.`
      }
    ]
  },
  {
    version: 'v2.13',
    date: new Date(2017, 6, 21),
    entries: [
      {
        title: 'Feedback',
        type: ChangeType.FEATURE,
        description: `Ab jetzt kannst du über den Punkt Feedback deine Verbesserungsvorschläge
        direkt an mich weitergeben. Über Antworten zu deinem Feedback wirst du informiert.
        \nIch freue mich sehr über neue Ideen und Hinweise auf bestehende Probleme! :-)`
      },
      {
        title: 'Menü',
        type: ChangeType.CHANGE,
        description: `Die aktuelle Seite ist von nun an im Menü farblich markiert.`
      },
      {
        title: 'Layout',
        type: ChangeType.FIX,
        description: `Kleinere Änderungen im Layout und Typos beseitigt.`
      }
    ]
  },
  {
    version: 'v2.12',
    date: new Date(2017, 6, 18),
    entries: [
      {
        title: 'Fixierte Toolbar',
        type: ChangeType.CHANGE,
        description: `Die Toolbar bleibt oben fixiert, so dass du immer auf sie
        zugreifen kannst.`
      },
      {
        title: 'Datenschutzerklärung',
        type: ChangeType.FEATURE,
        description: `Die Datenschutzerklärung findest du jetzt als Dialog bei Über.`
      },
      {
        title: 'Synchronisierung',
        type: ChangeType.FIX,
        description: `Es wird dir wieder korrekt angezeigt, wenn die Synchronisierung fehlschlägt.`
      },
      {
        title: 'Änderungshistorie',
        type: ChangeType.CHANGE,
        description: `Die Änderungshistorie wird dir erst ab einer Änderung der Minor-Version angezeigt.`
      }
    ]
  },
  {
    version: 'v2.11',
    date: new Date(2017, 6, 17),
    entries: [
      {
        title: 'Kursdauerfilter',
        type: ChangeType.CHANGE,
        description: `In der Kurswahl kannst du die Kurse nun nach minimaler
            und maximaler Dauer filtern. Das Layout wurde dem Zeitfilter angeglichen.`
      },
      {
        title: 'Änderungshistorie',
        type: ChangeType.FEATURE,
        description: `Klicke auf der Seite "Über" auf die Versionsnummer,
            um dir die Änderungshistorie anzusehen. Bei Updates wird sie automatisch
            angezeigt. Wenn dich das nicht interessiert, schalte es einfach über die Einstellungen ab.`
      }
    ]
  },
  {
    version: 'v2.10',
    date: new Date(2017, 6, 16),
    entries: [
      {
        title: 'Passwort ändern',
        type: ChangeType.FEATURE,
        description: `Über die Seite Account kannst du ab jetzt dein Passwort ändern,
            wenn du eingeloggt bist.`
      },
      {
        title: 'Passwort zurücksetzen',
        type: ChangeType.CHANGE,
        description: `Wenn du dein Passwort vergessen hast, kannst du es auf der Seite Login zurücksetzen.
            Ab jetzt wird ein Link zum Zurücksetzen per E-Mail an dich geschickt. Vorraussetzung ist, dass du bei
            der Registrierung eine E-Mail-Adresse angegeben hast.`
      }
    ]
  },
  {
    version: 'v2.8',
    date: new Date(2017, 6, 10),
    entries: [
      {
        title: 'Kursplantoolbar',
        type: ChangeType.FEATURE,
        description: `Über die neue Toolbar im Kursplan kannst du auf mobilen Geräten
            noch einfacher auf deine Favoriten, Kurswahl und Einstellungen zugreifen.`
      }
    ]
  },
  {
    version: 'v2.7',
    date: new Date(2017, 6, 9),
    entries: [
      {
        title: 'Kursplanperformance',
        type: ChangeType.PERFORMANCE,
        description: `Die Performance bei der Anzeige deines Kursplans hat sich deutlich verbessert.`
      },
      {
        title: 'Uhrzeitfilter',
        type: ChangeType.FIX,
        description: `Kurse, deren Endzeit genau der maximale Endzeit entsprach, wurden nicht korrekt gefiltert.`
      }
    ]
  }
];

import { Release } from './release/release.interface';
import { ChangeType } from './entry/type.enum';

export const releasenotes: Release[] = [
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

# CMS - sanity studio

[Sanity-studio](https://www.sanity.io/studio) / cms-frontend for dagpengerelatert informasjon

## Utvikling

### Starte appen lokalt

Installer sanity-cli globalt om du ikke har alt: `npm install -g @sanity/cli`

```
npm i
npm start
```

Du må logge deg inn i appen med feks github-bruker, du må få tilgang av en administrator for å redigere innhold.

### Scripts

- `backup` lagrer en backup av proddatasettet lokalt
- `clearDevelopmentDataset` sletter all data i development-datasettet slik at du har et clean utgangspunkt
- `copyProdDataToDevelopment` sletter development-datasettet og bytter det ut med en kopi av prod-datasettet
- `npm run docker` bygger appen i en dockercontainer på samme måte som i pipeline, hoster appen på [localhost:8000/arbeid/cms]().

### Deploy av endringer i Sanity Studio

Push på main vil automatisk deploye Studio til [https://www.nav.no/arbeid/cms](https://www.nav.no/arbeid/cms).

## Public data

Alt innhold som legges inn i alle dataset i dette sanityprosjektet må regnes som offentlig tilgjengelig fra øyeblikket det skrives inn. Det er naturligvis greit å kladde og skrive inn uferdig innhold, men aldri skriv sensitiv data i Sanity.

## Publisere innhold

Innhold som blir publisert i Sanity blir automatisk vist på infosidene på nav.no/arbeid etter noen minutter.

## Kontakt

Spørsmål tilknyttet koden kan rettes mot:

- Daniel Winsvold, daniel.winsvold@nav.no
- Knut Magne Riise, knut.magne.riise@nav.no
- Synneva Aasbrenn, synneva.aasbrenn@nav.no

### Internt

Slack: #område-arbeid-innhold, #område-arbeid, #team-dagpenger, #team-dagpenger-dev

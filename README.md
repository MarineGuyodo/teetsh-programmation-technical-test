# Test technique Teetsh

### Démarrage

Pour faire fonctionner le projet, les variables d'environnement doivent être correctement renseignées au préalable.

Vous pouvez vous aider du fichier `.env.example` pour cela.

### Enoncé

- Une matière (i.e. Français, etc.) est composée de domaines (i.e. language oral, écriture, etc.).
- Une année scolaire est composée de périodes (séparées par les vacances scolaire).
- Une programmation permet de découper l’enseignement d’une matière ou d’un domaine et de la planifier chronologiquement.

<aside>
👉 On souhaite pouvoir **visualiser une programmation sous forme de tableau** dont une dimension est le domaine et l’autre dimension est la période. On souhaite aussi laisser la possibilité à l’utilisateur d’**inverser les lignes et colonnes** de ce tableau.

</aside>

### Exemple de rendu du tableau

|           | Nombres                | Calculs | etc. |
| --------- | ---------------------- | ------- | ---- |
| Période 1 | Nombres jusqu’à 99...  | ...     | ...  |
| Période 2 | Nombres jusqu’à 999... | ...     | ...  |
| etc.      |                        |         |      |

### Point d’entrée

```bash
curl --location 'https://...' \
--header 'Authorization: Bearer ...'
```

### Consignes

- Temps indicatif : 4h
- Aucune limite de librairie, langage, UI, etc.

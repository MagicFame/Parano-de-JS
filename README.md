# Parano-de-JS - DoItNowd'JS

Projet de Master 2 à EFREI Paris pour la matière NodeJS  
Groupe composé de Jérémie UZAN, Léo MERRAN, Louis FONTAINE et Morgan WOLF

## Installation
1. Télécharger et installer [MongoDB](https://www.mongodb.com/fr)

## Synopsis projet

Le projet consiste en la réalisation d'un site internet. Ce site permet d'offrir un gestionnaire de tâches pour n'importe quel utilisateur. Cela permet d'avoir une interface simple avec la possibilité de gérer des délais, des degrés d'importance.

## Réflexion

### Analyser

Dans la vie, il est parfois compliqué de concilier ses tâches professionnelles et personnelles. En effet, 50 % des étudiants ont tendance à procrastiner, c'est-à-dire à remettre les tâches au lendemain. Parfois, ce n'est pas lié à la procrastination, mais à un manque d'outil de suivi et de rappel.

### Concevoir

Face à ce genre de problème, nous avons pensé à réaliser une application web contenant : 

* Une page d'inscription/connexion : Créer un compte à l'aide d'un pseudo et d'un mot de passe et la possibilité de se connecter.
* Une page pour ajouter des tâches : Créer une tâche avec un label associée à un délai et à un niveau d'importance en remplissant un formulaire. La possibilité d'ajouter une localisation à la tâche (si celle-ci doit se faire dans un endroit précis).
* Une page pour afficher l'ensemble des tâches : Afficher l'ensemble des tâches avec la possibilité de les trier par date (délais), par importance ou par label. Il est aussi possible de les supprimer et de modifier le statut (en cours à terminé par exemple).
* Une page pour modifier une tâche : En cliquant sur une tâche, il est possible de voir la description de cette tâche et de l'éditer.
* Une page statistiques : Cette page contient des statistiques sur les jours où les tâches sont le plus réalisé et sur le nombre total de taches réalisées.

### Planifier

Voici la planification :

Tâche principale back : Réalisation de l'API ( 3 semaines )

* Réalisation de la base de données - MongoDB - et structure de données ( 1 semaine )
* Création des requêtes sur l'API : Ajout d'événement, Modification d'événement, Affichage événement, Suppression événement ( 1 semaine )
* Sécurisation de l'API et connexion avec la base de données ( suivi de la gestion des modèles ) ( 1 semaine )

Tache principale front : Réalisation du site internet ( 5 semaines ) 

*  Création de la page d'authentification sécurisé et de connexion ( 1 semaine )
*  Création de la page d'affichage de l'ensemble des tâches avec système de tri ( 2 semaines )
*  Création de la page d'ajout de tâches - Modification des tâches ( 1 semaine )
*  Création de la page des statistiques ( 1 semaine )

Si assez de temps, l'ajout des fonctionnalitées suivantes : 
* Création de catégories pour les tâches
* Possibilité d'associer une tâche à une catégorie créée
* Ajout d'une carte 'Google Maps' avec les différentes tâches placées


### Prototype

Voici le prototype du projet :

* Authentification utilisateur
* Ajouter une tâche
* Consulter l'ensemble des tâches
* Tri des tâches
* Modifier la tâche
* Modifier son statut


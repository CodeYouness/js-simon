# JS-SIMON
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
    - Dopo 30 secondi i numeri scompaiono
    - e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
### Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.

## Human-code (JS-SIMON)
- mi collego ad un contenitoreA (dove aggiungerò i numeri)
- genero 1 numero (x5 volte)
    - genero un contenitoreB per il numero
    - se non è presente nella blacklist 
        1. lo aggiungo al contenitoreB
        2. lo aggiungo alla blacklist

- dopo 30 secondi:
    1. sovrascrivo il contenitoreA con niente
    2. chiedo 1 numero (x5 volte) e:
        - se è presente nella blacklist, lo aggiungo nel contenitoreC (numeri azzeccati) e aumento di 1 il numero di risposte esatte
        - se non è presente nella blacklist, lo aggiungo nel contenitoreD (numeri sbagliati) e aumento di 1 il numero di risposte sbagliate
    3. mostro il numero di risposte esatte, il contenitoreC (i numeri azzeccati) e la blacklist  
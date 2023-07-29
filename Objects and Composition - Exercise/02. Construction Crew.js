function constructionCrew(worker) {
    let waterIntakeFormula = worker.weight * (worker.experience * 0.1);

    if (worker.dizziness) {
        worker.levelOfHydrated += waterIntakeFormula;
        worker.dizziness = false;

    }

    return worker;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
/**
 * @beta
 * 表示分数信息。包含了分数持有者以及它当前拥有的分数。
 *
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 分数归属的分数持有者。
     *
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 分数持有者的分数。
     *
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}
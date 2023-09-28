/**
 * @beta
 * 表示记分板上的记分项。包含了分数持有者和各自的分数。
 *
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 此记分项的显示名称。
     *
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此记分项的名称。
     *
     * Identifier of the scoreboard objective.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 为一个分数持有者在此记分项上增加分数。
     *
     * Adds a score to the given participant and objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * 分数持有者。
     *
     * Participant to apply the scoreboard value addition to.
     * @param scoreToAdd
     * 要为指定分数持有者增加的分数。
     * @throws 抛出未确定错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回此记分项上已记录的分数持有者。
     *
     * Returns all objective participant identities.
     *
     * @throws 抛出未确定错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 获取指定分数持有者的分数。
     *
     * Returns a specific score for a participant.
     *
     * @param participant
     * 分数持有者。
     *
     * Identifier of the participant to retrieve a score for.
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 获取记分项上记录的所有分数信息。
     *
     * Returns specific scores for this objective for all
     * participants.
     *
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 检测指定的分数持有者是否在此记分项上拥有分数记录。
     *
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 检测此对象是否仍然关联到一个有效的记分项。
     *
     * Returns true if the ScoreboardObjective reference is still
     * valid.
     *
     * @returns 返回未确定值。
     */
    isValid(): boolean;
    /**
     * @remarks
     * 移除分数持有者在此记分项上的分数记录。
     *
     * Removes a participant from this scoreboard objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * 分数持有者。
     *
     * Participant to remove from being tracked with this
     * objective.
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 设置分数持有者在此记分项上的分数。
     *
     * Sets a score for a participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * 分数持有者。
     *
     * Identity of the participant.
     * @param score
     * 新的分数。对于小数，分数的值将被向下取整。
     *
     * New value of the score.
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
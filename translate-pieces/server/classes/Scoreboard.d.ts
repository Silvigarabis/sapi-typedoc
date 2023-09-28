/**
 * @beta
 * 表示记分板。其上包含了记分项和分数持有者。
 *
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 在记分板上添加一个新的记分项。
     *
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @param objectiveId 记分项名称。
     * @param displayName 记分项的显示名称。
     * @returns 创建的记分项对象。
     * @throws 抛出未确定错误。
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除显示位置上正在显示的记分项。
     *
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param displaySlotId 显示位置。
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取名称为 `objectiveId` 的记分项对象。
     *
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * 记分项名称。
     *
     * Identifier of the objective.
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取位于指定显示位置上的显示配置（描述此显示位置上正在显示的记分项与显示方式的对象）。
     *
     * Returns an objective that occupies the specified display
     * slot.
     *
     * @param displaySlotId 显示位置。
     * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
     * @throws 抛出未确定错误。
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 获取记分板上的已定义的所有记分项。
     *
     * Returns all defined objectives.
     *
     * @returns 返回未确定数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 获取所有已经定义的分数持有者。
     *
     * Returns all defined scoreboard identities.
     *
     * @returns 返回未确定数组。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板上移除指定的记分项。
     *
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws 抛出未确定错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * 设置指定的显示位置显示的记分项与其他显示配置。
     * 
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in read-only mode.
     *
     * @param displaySlotId 显示位置。
     * @param objectiveDisplaySetting 记分项显示配置。
     * @returns
     * 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
     *
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws 抛出未确定错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}
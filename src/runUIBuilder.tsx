//@ts-nocheck
import { FieldType, UIBuilder } from '@lark-base-open/web-api';

export default async function main(uiBuilder: UIBuilder) {
    uiBuilder.form(
        (form) => ({
            formItems: [
                form.tableSelect('table', { label: '选择数据表' }),
                form.fieldSelect('multipleField', { label: '多选模式', sourceTable: 'table', multiple: true }),
                form.fieldSelect('urlField', {
                    label: '要转换的 URL 字段',
                    sourceTable: 'table',
                    // 只展示类型为链接的字段
                    filterByTypes: [FieldType.Url],
                }),
                form.fieldSelect('selectField', {
                    label: '单选或多选字段',
                    sourceTable: 'table',
                    // 只展示名字包含单选或者多选的字段
                    filter: ({ name }) => name.includes('单选') || name.includes('多选'),
                }),
                form.fieldSelect('peopleField', {
                    label: '工作人员字段',
                    sourceTable: 'table',
                    // 只展示名字包含人员且类型为人员的字段
                    filter: ({ name, type }) => name.includes('人员') && type === FieldType.User,
                }),
            ],
            buttons: ['确定'],
        }),
        async ({ values }) => {
            const { table, multipleField, urlField, selectField, peopleField } = values;
        }
    );
}
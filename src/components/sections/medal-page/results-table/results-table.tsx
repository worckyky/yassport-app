import s from './results-table.module.scss'
import PageLayout from "../../../pageLayout/PageLayout";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectColumns, selectResults} from "../../../../store/slice/resultsSlice";
import Input from "../../../input/input";
import AppIconSearch from "../../../app-icons/app-icon-search";
import {useRouter} from "next/router";
import Link from 'next/link'
import {selectMedal} from "../../../../store/slice/medalSlice";
import {useEffect, useState} from "react";


const ResultsTable = () => {

    // const results = useAppSelector(selectResults);
    const columns = useAppSelector(selectColumns);
    const [results, setResults] = useState([] as any);
    const {
        content,
        error,
        pending
    } = useAppSelector(selectMedal)


    useEffect(() => {
        // TODO: Получить нормальные данные
        if (content.results) {
            const data = content.results.map(elem => {
                return {
                    ...elem, name: elem.athlete.firstName + " " + elem.athlete.lastName
                }
            })
            setResults(data);
        }
    },[content.results])


    const editable = (): any => {
        return [...columns, {
            title: '',
            key: 'id',
            dataIndex: 'id',
            width: 70,
            fixed: 'right',
            render: (id: string) => (
                <Link href={`/protocol/${[id]}`}>
                    <a>
                        <span className={s.resultsTableMore}>More</span>
                    </a>
                </Link>
            ),
        }]
    }

    const emptyStateGuard = () => {
        if (!results) {
            return (
                <div className={s.resultsTableEmptyState}>
                    Where is no data 🥸
                </div>
            )
        }
        return columns && <Table
            className="table-striped-rows"
            rowClassName={(record, index) => index % 2 === 0 ? s.tableRowLight : s.tableRowDark}
            dataSource={results}
            scroll={{x: 768}}
            bordered
            columns={editable()}
            pagination={false}/>
    }

    const onChangeHandler = (value: string) => {

    }


    return (
        <div className={s.resultsTable}>
            <h2 className={s.resultsTableTitle}>Results</h2>

            <PageLayout>
                <>
                    <Input onChange={onChangeHandler}
                           extraStyles={s.resultsSearchInput}
                           value={''}
                           icon={<AppIconSearch/>}
                           placeHolder={'Search via name or start number'}
                           width='full'/>
                    {emptyStateGuard()}
                </>
            </PageLayout>
        </div>
    )
}

export default ResultsTable;

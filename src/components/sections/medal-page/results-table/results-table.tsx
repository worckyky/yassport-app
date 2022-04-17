import s from './results-table.module.scss'
import PageLayout from "../../../pageLayout/PageLayout";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import Input from "../../../input/input";
import AppIconSearch from "../../../app-icons/app-icon-search";
import Link from 'next/link'
import {
    getResult,
    resetList,
    searchResult,
    selectColumns,
    selectResults
} from "../../../../store/slice/medalSlice";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import Button from "../../../button/button";
import {useDebouncedCallback} from 'use-debounce';
import AppIconSmallArrowRight from "../../../app-icons/small/app-iconSmall-arrowRight";

type EResultsTablePropTypes = {
    id?: string
}

const ResultsTable: React.FC<EResultsTablePropTypes> = ({id}) => {

    const defaultSate = {
        medal_id: 0,
        page: 0,
        max: 8
    }
    const [initialState, setInitialState] = useState(defaultSate)
    const [search, setSearch] = useState('');

    const columns = useAppSelector(selectColumns);
    const dispatch = useAppDispatch()
    const {
        list,
        total,
        error,
        pending
    } = useAppSelector(selectResults)


    const debounced = useDebouncedCallback(
        (query) => {
            if (query.length === 0) {
                dispatch(resetList())
                dispatch(getResult({
                    ...defaultSate,
                    medal_id: Number(id)
                }))
            } else {
                dispatch(resetList())
                dispatch(searchResult({
                    ...defaultSate,
                    medal_id: Number(id),
                    query
                }))
            }
            setInitialState({...defaultSate, medal_id: Number(id)})
            setSearch(query);
        },
        1000
    );

    useEffect(() => {
        return () => {
            dispatch(resetList())
        }
    }, [])


    const increaseValue = () => {
        const newState = ({
                ...initialState, page: initialState.page += 1
            }
        )
        if (search.length) {
            dispatch(searchResult({
                ...newState,
                medal_id: Number(id),
                query: search
            }))
        } else  {
            dispatch(getResult({...newState, medal_id: Number(id)}))
        }
        setInitialState(newState)
    }

    useEffect(() => {
        id && dispatch(getResult({...initialState, medal_id: Number(id)}))
    }, [id])


    const renderButton = useCallback(() => {
        if (list.length >= total || !list.length) {
            return ''
        }
        return (
            <Button size='normal' type='outline-primary' onClick={increaseValue}>See more</Button>
        )
    }, [list])

    const renderTable = useCallback(() => {
        return (
            <Table
                className="table-striped-rows"
                rowClassName={(record, index) => index % 2 === 0 ? s.tableRowLight : s.tableRowDark}
                dataSource={list}
                rowKey={(record => record.athlete_id)}
                scroll={{x: 768}}
                bordered
                columns={editable()}
                pagination={false}/>
        )
    }, [id, list, search])


    const editable = (): any => {
        return [...columns, {
            title: '',
            key: 'id',
            dataIndex: 'id',
            width: 100,
            fixed: 'right',
            render: (id: string) => (
                <Link href={`/protocol/${[id]}`}>
                    <a>
                        <span className={s.resultsTableMore}>More <AppIconSmallArrowRight/></span>
                    </a>
                </Link>
            ),
        }]
    }
    const condition = () => {
        return columns && list.length > 0
    }


    const emptyStateGuard = () => {
        if (!list.length) {
            return (
                <div className={s.resultsTableEmptyState}>
                    There is no data 🥸
                    <span> If you cant find you medal <a href="https://forms.gle/H1x9jcwcTLPU5fst9" target={'_blank'}>click</a> here</span>
                </div>
            )
        }
        return condition() && renderTable()
    }



    return (
        <div className={s.resultsTable}>
            <h2 className={s.resultsTableTitle}>Results</h2>

            <PageLayout>
                <>
                    <Input onChange={debounced}
                           extraStyles={s.resultsSearchInput}
                           pending={pending}
                           value={''}
                           icon={<AppIconSearch/>}
                           placeHolder={'Search via name or start number'}
                           width='full'/>
                    {emptyStateGuard()}
                    <div className={s.resultsTableWrapper}>
                        {renderButton()}
                    </div>
                </>
            </PageLayout>
        </div>
    )
}

export default ResultsTable;
